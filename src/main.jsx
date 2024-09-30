import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./screens/home/Home";
import Layout from "./screens/layout/Layout";
import Education from "./screens/education/Education";
import Projects from "./screens/projects/Projects";
import Experience from "./screens/experience/Experience";
import { ProjectProvider } from "./store/ProjectStore";

ReactDOM.render(
  <BrowserRouter>
    <ProjectProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
        </Route>
      </Routes>
    </ProjectProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
