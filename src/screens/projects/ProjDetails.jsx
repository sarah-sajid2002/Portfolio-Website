import projectData from "./ProjectData";
import { SlCalender } from "react-icons/sl";
import Cancel from "./Cancel";
import { useContext } from "react";
import { ProjectContext } from "../../store/ProjectStore";
import { FaGithub } from "react-icons/fa";

function ProjDetails() {
  let { showProjDet, setShowProjDet, id } = useContext(ProjectContext);
  console.log(id);
  let currProj = projectData[id];

  return (
    <div className="absolute top-60 sm:top-0 bg-gray-300 sm:mx-8 sm:p-3 z-30 sm:w-[800px] w-[350px] rounded-md left-4 sm:left-0 ">
      <Cancel />
      <div className="body  m-4">
        <div className="left">
          <img
            className=" rounded-md w-full sm:h-[200px] h-[150px]"
            src={currProj.img}
            alt={currProj.title}
          />
        </div>
        <div className="right mx-8">
          <p className="text-gray-600 sm:text-[20px] text-[18px]  my-3">
            {currProj.title}
          </p>
          <p>
            <a
              className="flex gap-2 text-blue-700 cursor-pointer"
              href={currProj.githubUrl}
            >
              view on <FaGithub />
            </a>
          </p>

          <p className="my-4 text-[14px]">{currProj.description}</p>
          <p className="flex my-5 justify-evenly sm:text-[30px] text-[20px] text-blue-600">
            {currProj.technologies}
            <p className="flex gap-2 align-middle my-3 sm:text-[15px] text-[10px]">
              <SlCalender /> {currProj.date}
            </p>
          </p>

          <button className="sm:w-[300px] w-[100px] bg-blue-600 rounded-xl text-[20px] px-3">
            <a href={currProj.hostedUrl} target="_blank">
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjDetails;
