import { useContext } from "react";
import { IoFilter } from "react-icons/io5";
import { ProjectContext } from "../../store/ProjectStore";

function Filter() {
  let { setFilter, checkFilter, setCheckFilter } = useContext(ProjectContext);
  return (
    <>
      <div className="filter flex justify-center  cursor-pointer align-middle font-bold w-16 sm:w-40 bg-gray-100  rounded-3xl">
        <span>
          <IoFilter className="my-1 block mr-2" />
        </span>
        <p onClick={() => setCheckFilter(!checkFilter)}>Filter</p>
      </div>
      {checkFilter && (
        <div className="showFilterDiv bg-gray-200 sm:w-[100px]  float-right m-auto p-2 rounded-lg border-black border">
          <p
            className="m-auto cursor-pointer text-blue-500 hover:underline "
            onClick={() => setFilter("Latest")}
          >
            Latest
          </p>
          <p
            className="m-auto cursor-pointer text-blue-500 hover:underline"
            onClick={() => setFilter("Oldest")}
          >
            Oldest
          </p>
        </div>
      )}
    </>
  );
}

export default Filter;
