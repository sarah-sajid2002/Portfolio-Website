import React, { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../../screens/projects/Filter";

function Navbar() {
  const [selectedTab, setSelectedTab] = useState("Home");

  let NavElements = ["Home", "Projects", "Experience", "Education"];
  return (
    <>
      <div className="grid grid-cols-4  font-serif pt-2 mx-2 text-[12px] sm:text-[20px] sm:ml-10 ">
        {NavElements.map((value, index) => {
          return (
            <div
              className={`font-serif ${selectedTab === value ? "text-orange-500 underline decoration-gray-600 decoration-1 underline-offset-8  " : ""}`}
              key={index}
              onClick={() => setSelectedTab(value)}
            >
              <Link to={value === "Home" ? "/" : `/${value.toLowerCase()}`}>
                {value}
              </Link>
            </div>
          );
        })}
        <div className="flex flex-col gap-2"></div>
      </div>
    </>
  );
}

export default Navbar;
