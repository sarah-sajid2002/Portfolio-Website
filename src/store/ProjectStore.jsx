import { createContext, useState } from "react";

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [selectedProjTab, setSelectedProjTab] = useState("All");
  const [showProjDet, setShowProjDet] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  let [projSearch, setProjSearch] = useState("");
  const [findProf, setFindProj] = useState("");
  let [id, setId] = useState();

  return (
    <ProjectContext.Provider
      value={{
        selectedProjTab,
        setSelectedProjTab,
        showProjDet,
        setShowProjDet,
        selectedProjectId,
        setSelectedProjectId,
        id,
        setId,
        projSearch,
        setProjSearch,
        findProf,
        setFindProj,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectProvider, ProjectContext };
