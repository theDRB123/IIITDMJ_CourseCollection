import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';

const Details = ({ content, setShowDetails, user, reRender }) => {

  const [editMode, setEditMode] = useState(false);

  const [newCourse, setNewCourse] = useState(content)

  const [userValid, setUserValid] = useState(false);


  const saveContent = () => {
    axios.get(`http://localhost:4000/editCourse?user=${JSON.stringify(user)}&newCourse=${JSON.stringify(newCourse)}&courseCode=${content.courseCode}`)
      .then((res) => {
        console.log(res.data);
        reRender()
      })
      .catch((err) => {
        alert("you are unauthorized!!!");
        console.log(err);
      })
  }

  const validateUser = () => {
    axios.get(`http://localhost:4000/checkUser?user=${JSON.stringify(user)}`)
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          setUserValid(true);
        }
      })
  }

  function TextWithLineBreaks(props) {
    const textWithBreaks = props.split('\n').map((text, index) => (
      <React.Fragment key={index}>
        {text}
        <br />
      </React.Fragment>
    ));

    return <div>{textWithBreaks}</div>;
  }

  if(!userValid) validateUser();

  return (
    <>
      {!editMode && (<div className="DetailView flex-col w-[100%] ">
        <div className="ButtonContainer h-[40px] w-[40px]  rounded-md text-center mr-[30px] mb-[0px] bg-[#5a8795]">
          <button className='backButton h-[40px] w-[40px]' onClick={() => { setShowDetails(false) }}><ArrowBackIosNewIcon sx={{ color: '#F5F9F9' }} /></button>
        </div>
        <div className='ContentL2 flex flex-wrap  w-[90%] ml-[auto] mr-[auto] items-start justify-start h-[auto]  min-h-[50vh]   bg-[#F5F9F9]  rounded-[10px] p-3 border-4 border-[#505c6295]  ' >
          <div className='CourseTitle text-[#344148c1] h-10 text-lg text-left w-[70%] md:w-[80%] text-l font-medium font-"Roboto Flex"  ' >
            {newCourse.courseName}
          </div>
          <div className='CourseTitle text-[#344148c1] h-10 text-lg text-left w-[10%] md:w-[10%] text-l font-medium font-"Roboto Flex"  ' >
            {newCourse.branchCode}
          </div>
          <div className='CourseCode text-[#798389] h-10 text-lg font-medium font-"Roboto Flex"'>
            {newCourse.courseCode}
          </div>
          <div className='CourseDescription w-[100%] overflow-auto text-[#505C62] font-regular text-md align-top'>
            <div className="content h-[200px]  lg:h-[240px]">
              {TextWithLineBreaks(newCourse.courseDesc)}
            </div>
          </div>
          <div className='CourseInstructors text-[#798389] h-10 text-lg font-medium font-"Roboto Flex"'>
            {newCourse.instructorName}
          </div>
          <div className='CourseEvak ml-[50px] text-[#798389] h-10 text-lg font-light font-"Roboto Flex'>
            Evaluation :- {newCourse.courseEval}
          </div>
          <div className='CourseCredits self-end w-[100%] text-right text-[#798389] h-10 text-lg font-medium font-"Roboto Flex"'>
            {newCourse.courseCredits} Credits
          </div>
        </div>
        {userValid && (<div className='ButtonContainer2 flex items-center justify-center text-center align-middle mr-[auto] ml-[auto] mt-3 h-[40px] w-[90px] rounded-md  bg-[#5a8795]'>
          {(<button className='EditButton text-center justify-center text-[#ffffffcf]' onClick={() => {
            setEditMode(true)
          }}>Edit</button>)}
        </div>)}
      </div>)}
      {editMode && (<div className="DetailView flex-col w-[100%] ">
        <div className="ButtonContainer h-[40px] w-[40px]  rounded-md text-center mr-[30px] mb-[0px] bg-[#5a8795]">
          <button className='backButton h-[40px] w-[40px]' onClick={() => { setShowDetails(false) }}><ArrowBackIosNewIcon sx={{ color: '#F5F9F9' }} /></button>
        </div>
        <div className='ContentL2 flex flex-wrap  w-[90%] ml-[auto] mr-[auto] items-start justify-start h-[auto] h-max-[00px] min-h-[50vh]   bg-[#F5F9F9] border-4 border-[#505c6295]   rounded-[10px] p-3 ' >
          <div className='CourseTitle text-[#344148c1] h-10 text-lg text-left w-[80%] md:w-[90%] text-l font-medium font-"Roboto Flex"  ' >
            <input type="text" className='input pl-3 w-[100%] bg-[#F5F9F9]' value={newCourse.courseName} onChange={(e) => {
              setNewCourse({
                ...newCourse,
                courseName: e.target.value
              })
            }} />
          </div>
          <div className='CourseCode text-[#798389] h-10 text-lg md:w-[10%] font-medium font-"Roboto Flex"'>
            {/* {content.courseCode} */}
            <input type="text" className='input pl-3 w-[100%] bg-[#F5F9F9]' value={newCourse.courseCode} onChange={(e) => {
              setNewCourse({
                ...newCourse,
                courseCode: e.target.value
              })
            }} />
          </div>
          <div className='CourseDescription w-[100%] overflow-auto text-[#505C62] font-regular text-md align-top'>
            <div className="content h-[200px]  lg:h-[250px] mb-2 ">
              <textarea type="text" className='input pl-3 w-[100%] bg-[#F5F9F9] h-[100%] resize-none' value={newCourse.courseDesc} onChange={(e) => {
                setNewCourse({
                  ...newCourse,
                  courseDesc: e.target.value
                })
              }} />
            </div>
          </div>

          <div className='CourseInstructors text-[#798389] h-10 text-lg font-medium font-"Roboto Flex"'>
            <input type="text" className='input pl-3 bg-[#F5F9F9] w-[100%]' value={newCourse.instructorName} onChange={(e) => {
              setNewCourse({
                ...newCourse,
                instructorName: e.target.value
              })
            }} />
          </div>
          <div className='CourseEvak ml-[50px]  text-[#798389] h-10 text-lg font-light font-"Roboto Flex'>
            Evaluation :-
            <input type="text" className='input pl-3 bg-[#F5F9F9] w-[auto]' value={newCourse.courseEval} onChange={(e) => {
              setNewCourse({
                ...newCourse,
                courseEval: e.target.value
              })
            }} />
          </div>
          <div className='CourseCredits self-end w-[100%] text-right text-[#798389] h-10 text-lg font-medium font-"Roboto Flex"'>
            <input type="text" className='input bg-[#F5F9F9] w-[60px] text-right pr-2' value={newCourse.courseCredits} onChange={(e) => {
              setNewCourse({
                ...newCourse,
                courseCredits: e.target.value
              })
            }} />
            credits
          </div>
        </div>
        <div className='ButtonContainer2 flex items-center justify-center text-center align-middle mr-[auto] ml-[auto] mt-3 h-[40px] w-[150px] rounded-md  bg-[#ffffff00]'>
          <button className='EditButton text-center justify-center rounded-md p-2 bg-[#5a8795] text-[#ffffffcf] mr-5' onClick={() => {
            setEditMode(false)
          }}>Cancel</button>
          <button className='SaveButton text-center justify-center rounded-md p-2  bg-[#5a8795] text-[#ffffffcf]' onClick={() => {
            saveContent()
            setEditMode(false)
          }}>Save</button>
        </div>
      </div>)}
    </>
  )
}

export default Details