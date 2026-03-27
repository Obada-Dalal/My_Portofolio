import "./styleResume.css";
import { siTailwindcss } from "simple-icons/icons";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
export default function Resume() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);
  const educationArray = [
    {
      id: 1,
      icon: "fa-solid fa-graduation-cap",
      title: "Education",
      des: "Study Program Applied Engineering Computer Technologies (Damascus University)",
      date: "09/2019 - 09/2024"
    }
  ];
  const workExArray = [
    {
      id: 1,
      icon: "fa-solid fa-laptop-code",
      title: "Work Experience",
      des1: "• Developed and maintained responsive web interfaces using HTML, CSS, and React.Js. "
    },
    {
      id: 2,
      des2: "• Collaborate with front End team to translate user and business require-mints into functional front-end designs based on Figma designs. Integrated restful APIs and optimized performance. "
    },
    { id: 3, des3: "• version control using Git and GitHub. " },
    { id: 4, des4: "• Participate in projects planning and discussions " }
  ];
  const skillsArray = [
    {
      id: 1,
      icon_skills: "fa-solid fa-brain",
      title: "Skills"
    },
    {
      id: 2,
      icon: "fa-brands fa-html5",
      tooltip: "HTML"
    },
    {
      id: 3,
      icon: "fa-brands fa-css3",
      tooltip: "Css"
    },
    {
      id: 4,
      icon: "fa-brands fa-js",
      tooltip: "JavasCript"
    },
    {
      id: 5,
      icon: "fa-brands fa-react",
      tooltip: "React"
    },
    {
      id: 6,
      icon: "fa-brands fa-github",
      tooltip: "GitHub"
    },
    {
      id: 7,
      component: <TailwindIcon />,
      tooltip: "Tailwind"
    }
  ];
  const neweducationArray = educationArray.map((e) => {
    console.log(e.title);
    return (
      <div className="main-resume" key={e.id}>
        <div className="icon-info" data-aos="fade-up">
          <i className={e.icon}></i>
          <span>{e.title}</span>
        </div>
        <div
          className="des"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <p>{e.des}</p>
          <div className="date">
            <i className="fa-solid fa-calendar-days"></i>
            <span>{e.date}</span>
          </div>
        </div>
      </div>
    );
  });
  const newWorkExArray = workExArray.map((e) => {
    return (
      <div className="main-resume" key={e.id}>
        <div className="icon-info" data-aos="fade-up">
          <i className={e.icon}></i>
          <span>{e.title}</span>
        </div>
        <div
          className="workex-des"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          <p>{e.des1}</p>
          <p>{e.des2}</p>
          <p>{e.des3}</p>
          <p>{e.des4}</p>
        </div>
      </div>
    );
  });
  function TailwindIcon() {
    return (
      <div
        className="icon-tailwind"
        dangerouslySetInnerHTML={{ __html: siTailwindcss.svg }}
        style={{
          width: "50px",
          height: "50px",
          fill: "currentColor"
        }}
      />
    );
  }
  const newskillsArray = (
    <div className="main-resume-skills">
      {/* القسم الرئيسي */}
      <div className="icon-info" data-aos="fade-up">
        <i className={skillsArray[0].icon_skills}></i>
        <span>{skillsArray[0].title}</span>
        {/* <div>{e.tooltip}<div/>  */}
      </div>
      {/* جميع الأيقونات داخل div واحد */}
      <div className="main-resume-skills box-icons">
        {skillsArray.slice(1).map((e, index) => (
          <div
            className="icon-wrapper"
            key={e.id}
            data-title={e.tooltip}
            data-aos="fade-left"
            data-aos-delay={index * 200}
          >
            {e.icon ? <i className={e.icon}></i> : <TailwindIcon />}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="box">
      <div className="container">
        <div className="resume">
          <h1 id="Resume" data-aos="fade-up" data-aos-delay="300">
            Resume
          </h1>
          <div>
            {neweducationArray}
            {newWorkExArray}
            {newskillsArray}
          </div>
        </div>
      </div>
    </div>
  );
}
