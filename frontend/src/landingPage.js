import React, { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

function LandingPage({ user, setUser, login, setLogin }) {

  const [faliedLogin, setFailedLogin] = useState(false);

  const validateUser = async () => {
    await axios.get(`http://localhost:4000/checkUser?user=${JSON.stringify(user)}`)
      .then((res) => {
        if (res.data == true) {
          console.log("valid user");
          setLogin(true);
          setFailedLogin(false)
        } else {
          setFailedLogin(true);
          console.log("invalid user")
        }
      })
  }

  const handleGuest = async () => {
    setUser(
      {
        "userID": "Guest",
        "password": "",
        "branch": "CSE",
        "programme": "BTECH"
      }
    )
    setLogin(true)
  }

  return (
    (<div className={"div-0 h-[100vh] fixed z-50 w-[100vw] flex flex-wrap duration-1000 ease-in-out " + (login ? 'translate-y-[-1500px]' : '')}
      style={{
        minWidth: "100%",
        background: "linear-gradient(to bottom, #29B6C9, #f2f2f2)",
        // transition: 'all 1.5s',
      }}
    >
      <div className="landingTitle flex items-center justify-center h-[63px] md:h-[75vh] w-[100%] md:w-[60%]  md:ml-10 bg-stone-50  text-center font-'Roboto' text-slate-500 font-medium	text-3xl md:text-5xl lg:pt-80 md:rounded-b-3xl hover:rounded-md duration-500  ">
        IIITDMJ Course Collection
      </div>

      <div className="div-1 flex-col  w-[100%] md:w-[30%] h-[100%] justify-center md:ml-10">
        <div className='flex-col w-[220px] lg:w-[250px] ml-[auto] mr-[auto]'>
          <div className={`div-1 flex flex-wrap bg-[#2D4747] h-[250px] w-[100%] mt-[10vh]  font-'Roboto' text-[#ffff]  text-sm rounded-lg items-center p-2 justify-center ${faliedLogin ? " border-2 border-red-500  " : ""} `} >
            Sign in as Admin
            <div className={`div-2 flex w-[100%] h-[50px] bg-[#f5f5f5] text-[#2D4747] rounded-md text-sm font-bold justify-start items-center ${faliedLogin ? "border-2 border-red-500" : ""} `}>
              <input type="text" placeholder='Username' className='AdminID w-[100%] h-[100%] rounded-md pl-3' value={user.userID} onChange={(e) => {
                setUser({
                  ...user,
                  userID: e.target.value
                })
              }} />
            </div>
            <div className={`div-2 flex w-[100%] h-[50px] bg-[#f5f5f5] text-[#2D4747] rounded-md text-sm font-bold justify-start items-center ${faliedLogin ? "border-2 border-red-500" : ""}`}>
              <input type="password" placeholder='Password' name="" id="" value={user.password} className='AdminPass w-[100%] h-[100%] pl-3 rounded-md ' onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value
                })
              }} />
            </div>

            <button className="buttonLogin w-[50%] h-[30px] bg-[#f5f5f5] text-[auto] text-[#2D4747] rounded-md font-bold justify-center items-center flex"
              onClick={async () => {
                await validateUser(user);
              }}
            >{!faliedLogin ? "sign in" : "retry"}</button>

          </div>

          <div className='div-1 flex w-[100%] mt-[5vh] bg-[#6dacac] p-2 border-4 justify-center items-center font-semibold text-[#2D4747] border-[#2D4747] rounded-md'>
            Or , <span className='underline text-stone-50 hover:text-[#fed377]' onClick={() => {
              handleGuest();
            }}>Sign In as guest </span>
          </div>
        </div>
      </div>
    </div>)
  );
}

export default LandingPage;
