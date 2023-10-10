
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./index.css"
import Sidebar from './Sidebar';
import ContentL1 from './ContentL1';

const App = () => {

  const [rawData, setRawData] = useState();
  
  const [data, setData] = useState(
    {
      "L1content": [
        {
          "title": "Sem 1",
          "L2content": [{
            "CourseTitle": "Mathematics1",
            "CourseCode": "NS1001",
            "CourseDesc": "khjgkjhdfkjhdf",
            "CourseCredits": "4"
          }]
        },
        {
          "title": "Sem 2",
          "L2content": [{
            "CourseTitle": "Mathematics2",
            "CourseCode": "NS1002",
            "CourseDesc": "khjgkjhdfkjhdf",
            "CourseCredits": "4"
          }, {
            "CourseTitle": "Physics2",
            "CourseCode": "NS1003",
            "CourseDesc": "khjgkjhdfkjhdf",
            "CourseCredits": "3"
          }]
        }]
    }
  );

  // useEffect(() => {
  //   fetch("http://localhost:4000/home")
  //     .then((res) => res.text())
  //     .then((data) => setData(data))
  // }, [])

  const [open, setOpen] = useState(false);

  //search will be a simple text for searching 
  const [search, setSearch] = useState();
  //filter will have the dictionary with filter options
  const [filter, setFilter] = useState({
    "sem": "All",
    "dept": "All",
    "credits": "All",
  });

  //seperateBy will have the dictionary with seperateBy options
  const [seperateBy, setSeperateBy] = useState({
    "sem": true,
    "dept": false,
    "credits": false,
    "year": false,
    "faculty": false
  });

  return (
    <div className="container min-h-[100vh]" style={
      {
        minWidth: "100%",
        background: "linear-gradient(to bottom, #29B6C960, #f2f2f25f)"
      }
    } >

      <Sidebar open={open} setOpen={setOpen} />

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

      <div className='ContentL0 flex flex-wrap h-auto bg-[#e3e7ea00] p-3 pt-0'>
        {data.L1content.map((content) => {
          return (<ContentL1 key={content.title} content={content} />);
        })}

      </div>

    </div>
  );
}

export default App;
