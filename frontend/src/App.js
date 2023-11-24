
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./index.css"
import Sidebar from './Sidebar';
import ContentL1 from './ContentL1';
import axios from 'axios';
import Details from './Details';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';



const App = ({ user, setUser, login, setLogin }) => {

  const [data, setData] = useState(
    {
      "L1content": [
        {
          "title": "",
          "L2content": [{
            "CourseTitle": "",
            "CourseCode": "",
            "CourseDesc": "",
            "CourseCredits": "",
            "CourseDept": "",
            "CourseFaculty": ""
          }]
        }
      ]
    }
  );


  //getting the data from the backend server and providing it with the states
  useEffect(() => {
    reRender()
  }, []);

  const reRender = () => {
    axios.get(`http://localhost:4000/data?user=${JSON.stringify(user)}&filter=${JSON.stringify(filter)}&seperateBy=${JSON.stringify(seperateBy)}`)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }


  //search will be a simple text for searching 
  const [search, setSearch] = useState("");
  //filter will have the dictionary with filter options
  const [filter, setFilter] = useState({
    "sem": 0,
    "dept": 0,
    "credits": 0,
  });


  // const [user, setUser] = useState({
  //   // "userID": "dhruv22",
  //   // "password": "adminpas",
  //   // "branch": "CSE",
  //   // "programme": "BTECH"
  // });

  //seperateBy will have the dictionary with seperateBy options
  const [seperateBy, setSeperateBy] = useState({
    "sem": true,
    "dept": false,
    "credits": false,
    "year": false,
    "faculty": false
  });

  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    reRender();
  }, [filter, seperateBy, setShowDetails, search]);


  //get the data for the specified course id
  const [details, setDetails] = useState()
  const getDetails = async (courseCode) => {
    axios.get(`http://localhost:4000/getDetails?courseCode=${courseCode}&user=${JSON.stringify(user)}`)
      .then((res) => {
        setDetails(res.data)
        setShowDetails(true)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const searchChecker = (content) => {
    content.L2content = content.L2content.filter((course) => {
      let flag = false;

      const regex = new RegExp(search, 'gi');
      if (course.CourseTitle.match(regex) || course.CourseCode.match(regex)) {
        flag = true;
      }

      const regex2 = /^\s*$/
      if (search.match(regex2)) {
        flag = true
      }
      if (flag) {
        return course
      }
    })

    if (content.L2content.length > 0) {
      return content
    }
  }

  data.L1content = data.L1content.filter((content) => {
    if (searchChecker(content)) {
      return content
    }
  })

  const loginHandler = () => {
    setUser(
      {
        "userID": "",
        "password": "",
        "branch": "CSE",
        "programme": "BTECH"
      }
    )
    setLogin(false);
  }

  const [logout, setLogout] = useState(false);

  return (
    <div className={`container min-h-[100vh] ease-in-out duration-1000 ${!login ? " translate-y-[0px] overflow-hidden" : ""}`} style={
      {
        minWidth: "100%",
        background: "linear-gradient(to bottom, #29B6C960, #f2f2f25f)"
      }
    } >

      {!showDetails && (<Sidebar open={open} setOpen={setOpen} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} seperateBy={seperateBy} setSeperateBy={setSeperateBy} />)}

      <div className="TitleContainer md:flex w-[100%] ease-in-out duration-1000 h-auto md:pb-5 left-0 top-[0px] sticky bg-[#f2f2f25f] backdrop-blur-sm mb-3"
        style={
          {
            background: "linear-gradient(to bottom, #29B6C9, #f2f2f25f)",
          }}
      >
        <div className='TitleBox flex items-center justify-center h-[63px] md:h-[10vh] md:w-[45%] md:ml-[4vw] bg-stone-50 md:rounded-bl-[5px] md:rounded-br-[5px] shadow overflow-hidden' >
          <div className="TitleText p-3 text-center text-slate-500 text-3xl ld:text-4xl font-medium font-'Roboto' ">
            IIITDMJ Course Collection
          </div>
        </div>

        <div className='NavBar flex h-[100%] md:w-[45%] items-center   justify-end md:mt-2 mt-[3px] mb-[3px]'>
          {login&&(<button className="login_btn h-[30px] w-[70px] rounded-md  mr-4 mb-[3px] font-medium text-[15px] font-'Roboto' bg-stone-50 text-[#3e4856]" onClick={() => {
            logout ? loginHandler() : setLogout(true)
            setTimeout(() => {
              setLogout(false);
            }, 3000);
          }}>
            {!logout && (<>{user.userID} </>)}
            {logout && (<><p className='login text-[#ca7878]'>logout?</p></>)}
          </button>)}

          <button className="button flex items-center justify-center  h-[35px] w-[35px] pb-1 " onClick={() => {
            setOpen(!open)
          }}>
            <MenuIcon className='iconflex md:mt-[10px]' sx={{ display: 'relative', color: '#F5F9F9', width: '100%', height: '100%' }} />
          </button>
        </div>
      </div>

      <div className='ContentL0 flex flex-wrap h-auto bg-[#e3e7ea00] p-3 pt-0 justify-center'>
        {!showDetails && data.L1content.map((content) => {
          return (<ContentL1 key={content.title} content={content} getDetails={getDetails} search={search} />);
        })}

        {showDetails && (<Details content={details} setShowDetails={setShowDetails} user={user} reRender={reRender} />)}

      </div>

    </div>
  );
}

export default App;
