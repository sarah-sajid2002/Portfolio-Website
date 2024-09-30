import { FaEye } from "react-icons/fa";
import ProjDetails from "./ProjDetails";
import projectData from "./ProjectData";

import { useContext, useState } from "react";
import { ProjectContext } from "../../store/ProjectStore";
function DisplayProjects() {
  let { showProjDet, setShowProjDet, selectedProjTab, setId, filter } =
    useContext(ProjectContext);

  const handleProjectClick = (id) => {
    setShowProjDet(true);
    setId(id);
  };

  const sortedProjects = projectData.filter(
    (project) =>
      selectedProjTab === "All" || project.category === selectedProjTab
  );

  return (
    <div>
      <div
        className={`showProjects flex justify-center sm:ml-8 sm:justify-start gap-5 mt-5 flex-wrap basis-96 `}
      >
        {sortedProjects.map((value) => (
          <div
            key={value.id}
            onClick={() => handleProjectClick(value.id)}
            className={`displayOneProject p-2 relative group w-[300px] h-[200px] cursor-pointer ${
              showProjDet ? "opacity-50" : "opacity-100"
            }`}
          >
            {/* Image with fade effect */}
            <img
              className={`rounded-xl w-full h-full border border-black transition-all duration-300 group-hover:opacity-30`}
              src={value.img}
              alt={value.title}
            />
            {/* Eye icon that appears on hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p>
                <FaEye className="text-5xl text-black" />
              </p>
              <p className="text-lg font-semibold float-end">{value.title}</p>
            </div>
          </div>
        ))}
      </div>

      {showProjDet && <ProjDetails />}
    </div>
  );
}

export default DisplayProjects;
