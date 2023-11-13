import "./App.css";
import "./index.css";
import login from "./login.svg";
import LoginIcon from '@mui/icons-material/Login';

function landingPage() {
  return (
    <div
      // className="div-0 h-full w-fit object-cover flex xl:flex-row lg:flex-row md:flex-col justify-center sm:flex-col xs:flex-col"
      className="div-0 min-h-[100vh] w-fit object-cover flex flex-wrap"
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
        <div className="div-1 flex h-[10vh] w-[220px] bg-[#2D4747] justify-left font-'Roboto' text-white  text-3xl md:pl-10 rounded-xl md:text-left items-center shadow-md  ml-[20%] mr-[40%]">
          Login
          <div className="img h-[80%] flex justify-end ml-[20%] ">
            {/* <img src={login} alt="login" className="lg:justify-end"/> */}
            <LoginIcon sx={{color:'#83B8C3', width: '100%', height:'100%'}}/>
          </div>
        </div>
        <div className="div-1 flex h-[10vh] w-[220px]  bg-[#F9F9F9] justify-left font-'Roboto' text-slate-500  text-3xl md:pl-10 rounded-xl md:text-left items-center shadow-md ml-[20%] mr-[50%] mt-24">
          Courses
        </div>
        <div className="div-1 flex h-[10vh] w-[220px]  bg-[#f9f9f9] justify-left font-'Roboto' text-slate-500  text-3xl md:pl-10 rounded-xl md:text-left items-center shadow-md ml-[20%] mr-[50%] mt-24">
          Programmes
        </div>
      </div>
      </div>
    </div>
  );
}

export default landingPage;
