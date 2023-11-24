import "./App.css";
import "./index.css";
import login from "./login.svg";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
function App() {
  return (
    <div className="div-0 min-h-[100vh] fixed z-50 w-fit object-cover flex flex-wrap"
      style={{
        minWidth: "100%",
        background: "linear-gradient(to bottom, #29B6C9, #f2f2f2)",
      }}
    >
      <div className="div-1 flex items-center justify-center h-[63px] md:h-[75vh] w-[100%] md:w-[60%]  md:ml-10 bg-stone-50  text-center font-'Roboto' text-slate-500 font-medium	text-3xl md:text-5xl lg:pt-80 md:rounded-b-3xl">
        IIITDMJ Course Collection
      </div>
      <div className="div-1 md:flex md:justify-center md:mt-24">

        <div className="div-1 md:flex-col justify-center ml-auto mr-auto">
          <div className="div-1 h-[50vh] w-[400px] bg-[#2D4747]  font-'Roboto' text-slate-400  text-2xl md:pl-10 rounded-xl md:text-left  shadow-md  ml-[20%] mr-[40%] pt-2">
            Enter Your Details

            <div className="div-2 mt-[50px] w-[300px] h-[50px] bg-[#f5f5f5] rounded-md text-xl font-bold justify-center pl-4 items-center">
              Email
            </div>
            <div className="div-2 flex mt-[50px] w-[300px] h-[50px] bg-[#f5f5f5] rounded-md text-xl font-bold pl-4 ">
              Password
              <div className="div-2 flex h-[70%] ml-[50%]">
                <VisibilityOffIcon sx={{ color: '#2525', width: '100%', height: '100%' }} />
              </div>
            </div>
            <div className="flex justify-end mt-20 text-lg">

              <div>Don't have an account?</div>
              <div className="div-2 w-[100px] h-[40px] bg-[#f5f5f5] rounded-md text-lg font-bold justify-end items-center flex" >
                Sign Up
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
