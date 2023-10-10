

const Sidebar = () => {
  return (
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

  )
}

export default Sidebar