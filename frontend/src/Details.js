import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from 'react';
import axios from 'axios';

const Details = ({ content, setShowDetails, user, reRender }) => {

  const [editMode, setEditMode] = useState(false);

  const [newCourse, setNewCourse] = useState(content)

  const saveContent = () => {
    axios.get(`http://localhost:4000/editCourse?user=${JSON.stringify(user)}&newCourse=${JSON.stringify(newCourse)}`)
      .then((res) => {
        console.log(res.data);
        reRender()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      {!editMode && (<div className="DetailView flex-col w-[100%] ">
        <div className="ButtonContainer h-[40px] w-[40px]  rounded-md text-center mr-[30px] mb-[20px] bg-[#5a8795]">
          <button className='backButton h-[40px] w-[40px]' onClick={() => { setShowDetails(false) }}><ArrowBackIosNewIcon sx={{ color: '#F5F9F9' }} /></button>
        </div>
        <div className='ContentL2 flex flex-wrap  w-[90%] ml-[auto] mr-[auto] items-start justify-start h-[auto] h-max-[00px] min-h-[50vh]   bg-[#F5F9F9]  rounded-[10px] p-3 ' >
          <div className='CourseTitle text-[#344148c1] h-10 text-lg text-left w-[80%] md:w-[92%] text-l font-medium font-"Roboto Flex"  ' >
            {newCourse.courseName}
          </div>
          <div className='CourseCode text-[#798389] h-10 text-lg font-medium font-"Roboto Flex"'>
            {newCourse.courseCode}
          </div>
          <div className='CourseDescription w-[100%] overflow-auto text-[#505C62] font-regular text-md align-top'>
            <div className="content h-[200px]  lg:h-[250px]">
              {newCourse.courseDesc}kkjfh
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />a
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
        <div className='ButtonContainer2 flex items-center justify-center text-center align-middle mr-[auto] ml-[auto] mt-3 h-[40px] w-[90px] rounded-md  bg-[#5a8795]'>
          <button className='EditButton text-center justify-center text-[#ffffffcf]' onClick={() => {
            setEditMode(true)
          }}>Edit</button>
        </div>
      </div>)}
      {editMode && (<div className="DetailView flex-col w-[100%] ">
        <div className="ButtonContainer h-[40px] w-[40px]  rounded-md text-center mr-[30px] mb-[20px] bg-[#5a8795]">
          <button className='backButton h-[40px] w-[40px]' onClick={() => { setShowDetails(false) }}><ArrowBackIosNewIcon sx={{ color: '#F5F9F9' }} /></button>
        </div>
        <div className='ContentL2 flex flex-wrap  w-[90%] ml-[auto] mr-[auto] items-start justify-start h-[auto] h-max-[00px] min-h-[50vh]   bg-[#F5F9F9]  rounded-[10px] p-3 ' >
          <div className='CourseTitle text-[#344148c1] h-10 text-lg text-left w-[80%] md:w-[92%] text-l font-medium font-"Roboto Flex"  ' >
            {/* {content.courseName} */}
            <input type="text" value={newCourse.courseName} onChange={(e) => {
              setNewCourse({
                ...newCourse,
                courseName: e.target.value
              })
            }} />
          </div>
          <div className='CourseCode text-[#798389] h-10 text-lg font-medium font-"Roboto Flex"'>
            {/* {content.courseCode} */}
            <input type="text" value={newCourse.courseCode} onChange={(e) => {
              setNewCourse({
                ...newCourse,
                courseCode: e.target.value
              })
            }} />
          </div>
          <div className='CourseDescription w-[100%] overflow-auto text-[#505C62] font-regular text-md align-top'>
            <div className="content h-[200px]  lg:h-[250px]">
              {/* {content.courseDesc}kkjfh */}
              {/* <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />a */}
              <textarea type="text" className='textArea w-[90%]' value={newCourse.courseDesc} onChange={(e) => {
                setNewCourse({
                  ...newCourse,
                  courseDesc: e.target.value
                })
              }} />
            </div>
          </div>

          <div className='CourseInstructors text-[#798389] h-10 text-lg font-medium font-"Roboto Flex"'>
            {content.instructorName}
          </div>
          <div className='CourseEvak ml-[50px] text-[#798389] h-10 text-lg font-light font-"Roboto Flex'>
            Evaluation :- {content.courseEval}
          </div>
          <div className='CourseCredits self-end w-[100%] text-right text-[#798389] h-10 text-lg font-medium font-"Roboto Flex"'>
            {content.courseCredits} Credits
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