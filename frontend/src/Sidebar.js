import { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Sidebar = ({ open, setOpen, search, setSearch, filter, setFilter, seperateBy, setSeperateBy }) => {

  const changeSeperateBy = (target) => {
    let temp = {
      "sem": false,
      "dept": false,
      "credits": false,
      "year": false,
      "faculty": false
    }

    switch (target) {
      case "sem":
        temp.sem = true;
        break;
      case "dept":
        temp.dept = true;
        break;
      case "credits":
        temp.credits = true;
        break;
      case "year":
        temp.year = true;
        break;
      case "faculty":
        temp.faculty = true;
        break;
      default:
        break;
    }

    console.log(temp)
    setSeperateBy(temp)
  }

  return (
    <>
      
      <div className={`SideBar  flex-col h-[100vh] z-30 md:w-[33%] w-[100%] p-4 pt-[150px] md:pt-[5vh] fixed md:top-1/2 md:-translate-y-1/2   ${open ? 'md:left-[67%]' : 'md:left-[150%]'} ${open ? 'left-[0%]' : 'left-[150%]'}  md:translate-x-150 md:rounded-tl-[30px]`} style={{
        background: "linear-gradient(180deg, #89D2D5 0%, rgba(73, 170, 173, 0.48) 19.09%, rgba(14, 133, 137, 0.00) 100%",
        'backdrop-filter': 'blur(15px)',
        transitionDuration: 1000,
        transition: 'all 0.5s ease-in-out'
      }}>
        <div className='button '>
        <button className="button ml-[80%] mr-[auto] h-[25px] w-[25px] md:h-[30px] md:w-[30px]" onClick={() => {
          setOpen(!open)
        }}><ArrowBackIosNewIcon sx={{ color: '#F5F9F9' , width: '100%' , height: '100%'}} /></button>
        </div>
        
        <div className='SearchBar flex md:h-[45px] h-[60px] w-[100%] bg-white rounded-[15px] mt-[10px] mb-[40px] md:mb-[3vh] pl-4'>
          <label htmlFor="search" className='label invisible absolute' >SearchBar</label>
          <input type="text" name="search" placeholder='Search' id="search" value={search} className='search m-auto ml-0' onChange={(e) => {
            setSearch(e.target.value)
          }} />
        </div>

        <div className='FilterContainer md:h-[150px] h-[200px] w-[100%] bg-white rounded-[15px] mb-[40px] md:mb-[3vh] p-3'>
          <p className='text-[#828282] mb-1 ml-1'>Filter</p>
          <div className='FilterOptionContainer'>
            <div className='FilterSem md:h-[30px] h-[45px] w-[100%] bg-[#567b86bc] md:mb-1 mb-2 rounded-[10px] flex pl-3 items-center'>
              <label htmlFor="FilterSem" className='w-[20%] text-[#ffffff]'>Sem</label>
              <select name="FilterSem" id="FilterSem" className='w-[75%] flex text-center justify-end bg-transparent  text-white' value={filter.sem} onChange={(e) => {
                setFilter({
                  ...filter,
                  "sem": e.target.value
                })
              }} >
                <option className="option" value="0">All</option>
                <option className="option" value="1">Sem1</option>
                <option className="option" value="2">Sem2</option>
                <option className="option" value="3">Sem3</option>
                <option className="option" value="4">Sem4</option>
                <option className="option" value="5">Sem5</option>
                <option className="option" value="6">Sem6</option>
                <option className="option" value="7">Sem7</option>
                <option className="option" value="8">Sem8</option>
              </select>
            </div>
            <div className='FilterDepartment md:h-[30px] h-[45px] w-[100%] bg-[#567b86bc] md:mb-1 mb-2 rounded-[10px] flex pl-3 items-center'>
              <label htmlFor="FilterDepartment" className='w-[20%] text-[#ffffff]'>Dept</label>
              <select name="FilterDepartment" id="FilterDepartment" className='w-[75%] flex text-center justify-end bg-[#00000000] text-white' value={filter.dept} onChange={(e) => {
                setFilter({
                  ...filter,
                  "dept": e.target.value
                })
              }}>
                <option value='0'>All</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="ME">ME</option>
              </select>
            </div>
            <div className='FilterCredits md:h-[30px] h-[45px] w-[100%] bg-[#567b86bc] md:mb-1 mb-2 rounded-[10px] flex pl-3 items-center'>
              <label htmlFor="FilterCredits" className='w-[20%] text-[#ffffff]'>Credits</label>
              <select name="FilterCredits" id="FilterCredits" className='w-[75%] flex text-center justify-end bg-[#00000000] text-white' value={filter.credits} onChange={(e) => {
                setFilter({
                  ...filter,
                  "credits": e.target.value
                })
              }}>
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
            <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='sem' onClick={() => {
              changeSeperateBy("sem");
            }}>
              Sem
            </div>
            <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='dept' onClick={() => {
              changeSeperateBy("dept");
            }}>
              Department
            </div>
            <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='credit' onClick={() => {
              changeSeperateBy("credits");
            }}>
              Credits
            </div>
            {/* <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='year' onClick={() => {
            changeSeperateBy("year");
            }}>
              Year
            </div> */}
            <div className='SepOption bg-[#567b86bc] p-1 rounded-md text-white mr-[5px] mt-[5px]' value='faculty' onClick={() => {
              changeSeperateBy("faculty");
            }}>
              Faculty
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Sidebar