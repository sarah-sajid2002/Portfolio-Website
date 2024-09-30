import { FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="h-screen py-10 px-2 ">
      <button className="rounded-xl bg-gray-100  p-1 w-36 lg:w-40 lg:text-[18px] text-[20px] text-green-700 font-bold flex justify-evenly align-middle mx-auto">
        <span className=" min-h-[8px] bg-green-700 rounded-full w-2 my-auto"></span>
        Available Now
      </button>

      <button className="rounded-3xl   p-1 w-36 lg:w-48 text-[15px] lg:text-[20px] bg-blue-700 text-white font-bold flex justify-center align-middle mx-auto my-10">
        <span className=" min-h-[8px] w-2 my-auto mx-4">
          <IoIosAddCircle />
        </span>
        Follow
      </button>

      <button className="rounded-3xl   p-1 w-36 lg:w-48 text-[15px] lg:text-[20px] border-2 border-gray-400 text-blue-700 bg-gray-200  font-bold flex justify-center align-middle mx-auto my-10">
        <span className=" min-h-[8px] w-2 my-auto mx-4">
          <AiTwotoneMessage />
        </span>
        Message
      </button>
      <div className="emailLocation flex justify-between flex-col align-middle my-7 ml-4">
        <div className="mail grid grid-cols-12 my-3">
          <div>
            <MdEmail className=" col-span-2  text-[20px] text-gray-500 " />
          </div>
          <div className="col-span-10  text-gray-500 ml-4">
            <p className="text-[12px]">sarahsajid19@gmail.com</p>
          </div>
        </div>
        <div className="location grid grid-cols-12 my-3">
          <div>
            <IoLocation className=" col-span-2  text-[20px] text-gray-500 " />
          </div>
          <div className="col-span-10 text-gray-500 ml-4">
            <p className="text-[12px]">KAECHS Karachi, Pakistan</p>
          </div>
        </div>
      </div>
      <div className="footerLinks flex justify-evenly ">
        <a href="https://github.com/sarah-sajid2002" target="_blank">
          <FaGithub className="text-[30px] text-gray-600 hover:text-gray-800" />
        </a>
        <a
          href="https://www.linkedin.com/in/sarah-sajid-49bab5233/"
          target="_blank"
        >
          <TfiLinkedin className="text-[30px] text-gray-600 hover:text-gray-800" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
