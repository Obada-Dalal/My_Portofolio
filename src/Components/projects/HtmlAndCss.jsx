import "./styleProjects.css";
// icons
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const htmlAndCss = [
  {
    id: 1,
    image: "images/dashbord-responsive.jpeg",
    title: "dashbord-responsive",
    des: "Project Dashboard Responsive is a responsive dashboard built using HTML and CSS, enhanced with the Tailwind CSS framework to streamline styling and improve layout consistency. The project focuses on creating a professional and well‑structured interface that includes elements such as side navigation, cards, and tables, all designed to adapt smoothly across different screen sizes. It aims to apply advanced responsive design concepts and deliver a clean, organized user experience using Tailwind’s powerful utility classes.",
    source: "https://github.com/Obada-Dalal/Project-Dashbord-Responsive",
    view: "https://dashbord-responsive.netlify.app"
  },
  {
    id: 2,
    image: "images/project-responsive-level-2.jpeg",
    title: "project-responsive-level-2",
    des: "This project represents an advanced step in applying responsive design principles using HTML and CSS. It focuses on building a more refined and structured web page compared to Level 1 by improving layout organization and creating a professional interface that adapts smoothly to various screen sizes. The project utilizes technologies such as Flexbox and Grid for dynamic element arrangement, along with Media Queries to adjust the design across different devices.",
    source: "https://github.com/Obada-Dalal/ProjectResponsive-Livel-Tow",
    view: "https://project-responsive-level-2.netlify.app"
  },
  {
    id: 3,
    image: "images/project-responsive-level-1.jpeg",
    title: "project-responsive-level-1",
    des: "This project is a simple web page built using HTML and CSS to practice the fundamentals of responsive design. It focuses on creating a clean interface that adapts smoothly to different screen sizes, using Flexbox and Media Queries to enhance layout consistency and user experience.",
    source: "https://github.com/Obada-Dalal/ProjectResponsive",
    view: "https://project-responsive-level-1.netlify.app/"
  }
];
const newHtmlAndCss = htmlAndCss.map((e) => {
  return (
    <div className="all-projects" data-aos="fade-up" key={e.id}>
      <div className="image-all-projects">
        <img src={e.image} alt="" />
      </div>
      <div className="info-all-projects">
        <h2 data-aos="fade-right" data-aos-easing="ease-in-sine">
          {e.title}
        </h2>
        <p
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        >
          {e.des}
        </p>
      </div>
      <div className="links-all-projects">
        <a href={e.source} target="_blank">
          <FaGithub /> GitHub
        </a>
        <a href={e.view} target="_blank">
          <LuSquareArrowOutUpRight /> Link
        </a>
      </div>
    </div>
  );
});
export default function HtmlAndCss() {
  return <div className="box-map">{newHtmlAndCss}</div>;
}
