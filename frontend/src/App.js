
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./index.css"

const App = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:4000/home")
  //     .then((res) => res.text())
  //     .then((data) => setData(data))
  // }, [])

  return (
    <div className="container min-h-[100vh]" style={
      {
        minWidth: "100%",
        background: "linear-gradient(to bottom, #29B6C960, #f2f2f25f)"
      }
    } >

      <div className='SideBar md:visible invisible flex-col h-[100vh] z-50 md:w-[33%] w-[100%] p-4 pt-[150px] md:pt-[5vh] fixed md:top-1/2 md:-translate-y-1/2  md:left-[67%] md:-translate-x-100 rounded-tl-[30px]' style={{
        background: "linear-gradient(180deg, #89D2D5 0%, rgba(73, 170, 173, 0.48) 19.09%, rgba(14, 133, 137, 0.00) 100%",
        'backdrop-filter': 'blur(15px)'
      }}>
        <div className='SearchBar flex md:h-[45px] h-[60px] w-[100%] bg-white rounded-[15px] mb-[40px] md:mb-[3vh] pl-4'>
            <label htmlFor="search" className='label invisible absolute' >SearchBar</label>
            <input type="text" name="search" placeholder='Search' id="search" className='search m-auto ml-0'/>
        </div>

        <div className='FilterContainer md:h-[150px] h-[200px] w-[100%] bg-white rounded-[15px] mb-[40px] md:mb-[3vh] p-3'>
          <p className='text-[#828282] mb-1 ml-1'>Filter</p>
          <div className='FilterOptionContainer'>
            <div className='FilterSem md:h-[30px] h-[45px] w-[100%] bg-[#567b86bc] md:mb-1 mb-2 rounded-[10px] flex pl-3 items-center'>
              <label htmlFor="FilterSem" className='w-[20%] text-[#ffffff]'>Sem</label>
              <select name="FilterSem" id="FilterSem" className='w-[75%] flex text-center justify-end bg-[#00000000] text-white'>
                <option value="0">All</option>
                <option value="1">Sem1</option>
                <option value="2">Sem2</option>
                <option value="3">Sem3</option>
                <option value="4">Sem4</option>
                <option value="5">Sem5</option>
                <option value="6">Sem6</option>
                <option value="7">Sem7</option>
                <option value="8">Sem8</option>
              </select>
            </div>
            <div className='FilterDepartment md:h-[30px] h-[45px] w-[100%] bg-[#567b86bc] md:mb-1 mb-2 rounded-[10px] flex pl-3 items-center'>
            <label htmlFor="FilterDepartment" className='w-[20%] text-[#ffffff]'>Dept</label>
              <select name="FilterDepartment" id="FilterDepartment" className='w-[75%] flex text-center justify-end bg-[#00000000] text-white'>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="ME">ME</option>
              </select>
            </div>
            <div className='FilterCredits md:h-[30px] h-[45px] w-[100%] bg-[#567b86bc] md:mb-1 mb-2 rounded-[10px] flex pl-3 items-center'>
            <label htmlFor="FilterCredits" className='w-[20%] text-[#ffffff]'>Credits</label>
              <select name="FilterCredits" id="FilterCredits" className='w-[75%] flex text-center justify-end bg-[#00000000] text-white'>
                <option value="0">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>

        <div className="SeperateBy md:h-[150px] h-[200px] w-[100%] bg-white rounded-[15px] mb-[40px] p-3">
          <p className='text-[#828282] mb-1 ml-1'>Seperate By</p>
          <div className='SeparateByOptionContainer flex flex-wrap'>
            <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='sem'>
              Sem
            </div>
            <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='dept'>
              Department
            </div>
            <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='credit'>
              Credits
            </div>
            <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='year'>
              Year
            </div>
            <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='faculty'>
              Faculty
            </div>
          </div>
        </div>

      </div>


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

        <div className='ContentL1 lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[auto] max-h-[310px] overflow-auto flex-col bg-[#80a3a7bc] rounded-[3px] p-[10px] pt-0 mb-[20px]' style={
          {
            // background: "linear-gradient(to bottom, #7b9a9f, #7b9a9f50 ,#f2f2f25f ) ",
          }}
        >


          <div className='ContentL1Title flex items-center justify-left w-[100%] pl-[30%] lg:h-[40px] md:h-[40px] sm:h-[9vh]  lg:text-l sm:text-l text-white font-roboto font-medium m-auto'>
            <p>Sem 1</p>
          </div>

          <div className='ContentL1.5 flex w-[100%] h-[260px] overflow-auto lg:pb-3 md:pb-3'>

            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>

            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>

            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>


            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>

            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>

          </div>


        </div>

        <div className='ContentL1 lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[auto] max-h-[310px] overflow-auto flex-col bg-[#80a3a7bc] rounded-[3px] p-[10px] pt-0' style={
          {
            // background: "linear-gradient(to bottom, #7b9a9f, #7b9a9f50 ,#f2f2f25f ) ",
          }}
        >

          <div className='ContentL1Title flex items-center justify-left w-[100%] pl-[30%] lg:h-[40px] md:h-[40px] sm:h-[9vh]  lg:text-l sm:text-l text-white font-roboto font-medium m-auto'>
            <p>Sem 1</p>
          </div>

          <div className='ContentL1.5 flex w-[100%] h-[260px] overflow-auto lg:pb-3 md:pb-3'>

            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>

            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>

            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>


            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>

            <div className='ContentL2 flex flex-wrap min-w-[200px] h-[100%] sm:w-[200px] md:min-w-[250px] bg-[#F5F9F9]  rounded-[2px] p-3 mr-[20px]'>
              <div className='CourseTitle text-[#344148c1] text-left w-[76%] text-l font-medium font-"Roboto Flex"  ' >
                Mathematics 1
              </div>
              <div className='CourseCode text-[#798389] font-medium font-"Roboto Flex"'>
                NS1001
              </div>
              <div className='CourseDescription w-[100%] text-[#505C62] font-light text-sm'>
                Real Numbers , Functions , Sequences , Limit and Continuity, Differentiation
              </div>
              <div className='CourseCredits self-end w-[100%] text-right'>
                4 Credits
              </div>
            </div>

          </div>


        </div>



      </div>



    </div>
  );
}

export default App;
