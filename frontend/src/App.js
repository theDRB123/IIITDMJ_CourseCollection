
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./index.css"
import Sidebar from './Sidebar';
import ContentL1 from './ContentL1';
import axios from 'axios';
import Details from './Details';

const App = () => {

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


  const [user, setUser] = useState({
    "userID": "dhruv22",
    "password": "adminpass",
    "branch": "CSE",
    "programme": "BTECH"
  });

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
    axios.get(`http://localhost:4000/data?user=${JSON.stringify(user)}&filter=${JSON.stringify(filter)}&seperateBy=${JSON.stringify(seperateBy)}`)
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [filter, seperateBy, setShowDetails]);


  //get the data for the specified course id
  const [details, setDetails] = useState()
  const getDetails = async (courseCode) => {
    console.log(courseCode)
    axios.get(`http://localhost:4000/getDetails?courseCode=${courseCode}&user=${JSON.stringify(user)}`)
      .then((res) => {
        setDetails(res.data)
        setShowDetails(true)
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="container min-h-[100vh]" style={
      {
        minWidth: "100%",
        background: "linear-gradient(to bottom, #29B6C960, #f2f2f25f)"
      }
    } >

      {!showDetails && (<Sidebar open={open} setOpen={setOpen} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} seperateBy={seperateBy} setSeperateBy={setSeperateBy} />)}

      <div className="TitleContainer md:flex w-[100%] h-auto pb-5 left-0 top-[0px] sticky bg-[#f2f2f25f] backdrop-blur-sm mb-3"
        style={
          {
            background: "linear-gradient(to bottom, #29B6C9, #f2f2f25f)",
          }}
      >
        <div className='TitleBox flex items-center justify-center h-[8vh] md:h-[10vh] md:w-[45%] md:ml-[4vw] bg-stone-50 md:rounded-bl-[5px] md:rounded-br-[5px] shadow overflow-hidden' >
          <div className="TitleText p-3 text-center text-slate-500 text-3xl ld:text-4xl font-medium font-'Roboto' ">
            IIIDMJ Course Collection
          </div>
        </div>
        <div className='NavBar flex items-center sm:items-center h-[90%] md:h-[85%] md:w-[45%] '>

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
