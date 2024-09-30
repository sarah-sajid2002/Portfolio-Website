import { MdCancel } from "react-icons/md";
import { useContext } from "react";
import { ProjectContext } from "../../store/ProjectStore";

function Cancel() {
  let { setShowProjDet } = useContext(ProjectContext);
  return (
    <div
      onClick={() => setShowProjDet(false)}
      className="cross cursor-pointer float-right text-red-600 hover:text-black sm:text-[25px] text-[30px]"
    >
      <MdCancel />
    </div>
  );
}

export default Cancel;
