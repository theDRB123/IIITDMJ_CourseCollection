const express = require('express');
const sessions = require('express-session');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const fs = require('fs');
const e = require('express');
const { Console } = require('console');

const app = express();
app.use(sessions({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))


//connecting to the database
const mysql = require('mysql2');
const { get } = require('http');
const { resolve } = require('path');


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dhruv001',
    database: 'iiitdmj_coursecollection'
})

connection.connect((err) => {
    if (err) throw err;
    console.log("connected to database");
})



app.use(cors());

app.get('/data', async (req, res) => {
    const user = JSON.parse(req.query.user);
    const filter = JSON.parse(req.query.filter);
    const seperateBy = JSON.parse(req.query.seperateBy);

    let outputData = await generateData(user, filter, seperateBy);

    res.json(outputData);
    res.end();
})

const validateUser = async (user) => {
    let adminList;
    const query2 = `SELECT * from admins`
    const getAdmins = new Promise((resolve, reject) => {
        connection.query(query2, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
    adminList = await getAdmins;

    let isAdmin = false;
    adminList.forEach(admin => {
        if (admin.adminID == user.userID && admin.adminPass == user.password) {
            isAdmin = true;
        }
    });
    console.log(adminList)
    return true
}

app.get('/checkUser', async (req, res) => {
    const user = JSON.parse(req.query.user)
    //now send a query to the database to check if the user is admin or not
    const isAdmin = await validateUser(user);
    res.send(isAdmin);
    console.log(isAdmin);
    res.end();
})

app.get('/getDetails', async (req, res) => {

    const user = JSON.parse(req.query.user);
    const courseCode = req.query.courseCode

    const query = `select * from course natural join semisters natural join branch natural join instructor where courseCode = '${courseCode}'`

    const getData = new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })

    let outputData = await getData

    console.log(outputData[0])
    res.json(outputData[0])
    res.end()
})

app.get('/editCourse', async (req, res) => {
    const user = JSON.parse(req.query.user);
    const courseCode = req.query.courseCode;
    const newCourse = JSON.parse(req.query.newCourse);

    const query = `UPDATE course SET courseName = '${newCourse.courseName}' , courseCode = '${newCourse.courseCode}'  , courseDesc = '${newCourse.courseDesc}', courseCredits = '${newCourse.courseCredits}', courseDept = '${newCourse.courseDept}', courseEval = '${newCourse.courseEval}', semNo = '${newCourse.semNo}' WHERE courseCode = '${courseCode}'`
    const query2 = 'UPDATE'

    const isAdmin = await validateUser(user);

    if (isAdmin) {
        try {
            connection.query(query, (err, result) => {
                if (err) {
                    throw err;
                    // res.status(400).end();
                }
                else {
                    res.status(200).end();
                    console.log("course updated")
                }
            })
        } catch (err) {
            console.log(err);
        }

    } else { res.status(401).end();; console.log("user not admin \n" + user.userID) }


})

app.get('/validate', async (req, res) => {
    const user = JSON.parse(req.query.user);
    const isAdmin = await validateUser(user);
    res.send(isAdmin);
    res.end();
})

//this function will generate the appropriate data according to the user, filter and seperateBy
const generateData = async (user, filter, seperateBy) => {
    const branch = user.branch;
    const programme = user.programme;
    const sem = filter.sem == 0 ? null : filter.sem;
    const dept = filter.dept == 0 ? null : filter.dept;
    const credits = filter.credits == 0 ? null : filter.credits;
    const semWise = seperateBy.sem;
    const deptWise = seperateBy.dept;
    const creditsWise = seperateBy.credits;
    const yearWise = seperateBy.year;
    const facultyWise = seperateBy.faculty;

    const GpushCourseData = (course) => {
        return {
            "CourseTitle": course.courseName,
            "CourseCode": course.courseCode,
            "CourseCredits": course.courseCredits,
            "CourseDesc": course.courseDesc,
            "CourseDept": course.courseDept,
            "InstructorCode" : course.instructorCode,
            "InstructorName": course.instructorName,
            "CourseBranch": course.courseBranch,
            "CourseEval": course.courseEval,
            "semNo": course.semNo
        }
    }

    //let rawData = data generated from the SQL queries by sending user branch and programme
    //const query = `SELECT * FROM course NATURAL JOIN instructor JOIN semisters where courseBranch = '${branch}' AND courseProgramme = '${programme}' AND course.semNo = semisters.semNo`
    const query = `select * from course natural join semisters natural join branch natural join instructor`

    let rawData;
    const getData = new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            console.log(branch)
            if (err) reject(err);
            resolve(result);
        })
    })

    rawData = await getData;


    //then we will filter the rawData according to the filter options one by one
    let data = rawData;
    if (sem != null) {
        data = rawData.filter((course) => {
            return course.semNo == sem;
        })
    }
    if (dept != null) {
        data = data.filter((course) => {
            return course.courseDept == dept;
        })
    }
    if (credits != null) {
        data = data.filter((course) => {
            return course.courseCredits == credits;
        })
    }
    //then after the filtering is done we will seperate the data according to the seperateBy options one by one

    const outputData = {
        "L1content": []
    }

    if (semWise) {
        //first get the list of semisters in the data
        const semList = [];
        data.forEach(element => {
            if (!semList.includes(element.semNo)) {
                semList.push(element.semNo);
            }
        });
        semList.sort()
        semList.forEach(element => {
            pushData = {
                "title": `Sem ${element}`,
                "L2content": []
            }
            data.forEach(course => {
                pushCourseData = GpushCourseData(course);
                if (course.semNo == element) {
                    pushData.L2content.push(pushCourseData);
                }
            })

            outputData.L1content.push(pushData);
        });
    } else if (deptWise) {
        //first get the list of departments in the data
        const deptList = [];
        data.forEach(element => {
            if (!deptList.includes(element.courseDept)) {
                deptList.push(element.courseDept);
            }
        });
        deptList.forEach(element => {
            pushData = {
                "title": `${element}`,
                "L2content": []
            }
            data.forEach(course => {
                pushCourseData = GpushCourseData(course);
                if (course.courseDept == element) {
                    pushData.L2content.push(pushCourseData);
                }
            })
            outputData.L1content.push(pushData);
        });
    } else if (creditsWise) {
        //first get the list of credits in the data
        const creditsList = [];
        data.forEach(element => {
            if (!creditsList.includes(element.courseCredits)) {
                creditsList.push(element.courseCredits);
            }
        });
        creditsList.sort()
        creditsList.forEach(element => {
            pushData = {
                "title": `${element} Credits`,
                "L2content": []
            }
            data.forEach(course => {

                pushCourseData = GpushCourseData(course);
                if (course.courseCredits == element) {
                    pushData.L2content.push(pushCourseData);
                }
            })
            outputData.L1content.push(pushData);
        });
    } else if (yearWise) {
        //first get the list of years in the data
        const yearList = [];
        data.forEach(element => {
            if (!yearList.includes(element.year)) {
                yearList.push(element.year);
            }
        });
        yearList.forEach(element => {
            pushData = {
                "title": `${element}`,
                "L2content": []
            }
            data.forEach(course => {
                pushCourseData = GpushCourseData(course);
                if (course.year == element) {
                    pushData.L2content.push(pushCourseData);
                }
            })
            outputData.L1content.push(pushData);
        });
    } else if (facultyWise) {
        //first get the list of faculty in the data
        const facultyList = [];
        data.forEach(element => {
            if (!facultyList.includes(element.instructorCode)) {
                facultyList.push(element.instructorCode);
            }
        });
        facultyList.forEach(element => {
            pushData = {
                "title": `${element}`,
                "L2content": []
            }
            data.forEach(course => {
                pushCourseData = GpushCourseData(course);
                if (course.instructorCode == element) {
                    pushData.L2content.push(pushCourseData);
                }
            })
            outputData.L1content.push(pushData);
        });
    }

    //after sorting we will have the data in the client-side format and will be sent to the client

    //also implement the search 

    return outputData;
}

app.listen(4000, () => {
    console.log("server is listening on port 4000 ....")
})
