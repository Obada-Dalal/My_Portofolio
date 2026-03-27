import AllProjects from "./AllProjects";
import HtmlAndCss from "./HtmlAndCss";
import ReactProjects from "./ReactProjects";
import "./styleProjects.css";
import { Link, Route, Routes, Navigate } from "react-router-dom";
export default function MainProjects() {
  return (
    <div className="box">
      <div className="container">
        <h1 id="Work" data-aos="fade-up" data-aos-delay="300">
          Work
        </h1>
        <div className="main-projects">
          <div className="buttons">
            <Link to="all">All Projects</Link>
            <Link to="html&css">Html&Css</Link>
            <Link to="react">React</Link>
          </div>
          <div className="projects">
            <Routes>
              <Route path="/" element={<AllProjects />} />
              <Route path="all" element={<AllProjects />} />
              <Route path="html&css" element={<HtmlAndCss />} />
              <Route path="react" element={<ReactProjects />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
