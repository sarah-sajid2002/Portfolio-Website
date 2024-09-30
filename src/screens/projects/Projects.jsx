import { CiSearch } from "react-icons/ci";
import Filter from "./Filter";
import { useContext } from "react";
import { ProjectContext } from "../../store/ProjectStore";
import DisplayProjects from "./DisplayProjects";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Projects() {
  let projTab = ["All", "Games", "Web Applications"];
  const {
    selectedProjTab,
    setSelectedProjTab,
    projSearch,
    setProjSearch,
    setFindProj,
  } = useContext(ProjectContext);

  function handleProjSearch(projSearch) {
    if (!projSearch.length) {
      toast.error("Fill the field");
    } else {
      setFindProj(projSearch);
    }
  }

  return (
    <>
      <div className="projectDiv grid grid-cols-12  mt-8  rounded-md">
        {projTab.map((value, index) => {
          return (
            <button
              key={index}
              onClick={() => setSelectedProjTab(value)}
              className={`${value === "All" ? "col-span-1" : "col-span-4"} ${selectedProjTab === value ? " underline decoration-gray-600 decoration-1 underline-offset-8  " : ""}  text-[14px] sm:text-[18px] hover:text-orange-700  cursor-pointer ml-0`}
            >
              {value}
            </button>
          );
        })}

        <div className="col-span-3  flex justify-center align-middle border border-gray-300 rounded-lg">
          <input
            value={projSearch}
            onChange={(e) => setProjSearch(e.target.value)}
            className="  w-9/12  border-none bg-transparent text-[10px] sm:text-[18px] "
            type="text"
            placeholder="Search Project"
          />
          <CiSearch
            className="my-auto cursor-pointer"
            onClick={() => handleProjSearch(projSearch)}
          />
        </div>
      </div>
      <DisplayProjects />
      <ToastContainer />
    </>
  );
}

export default Projects;
