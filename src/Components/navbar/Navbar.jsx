import { useState } from "react";
import "./navbar.css";
import logo from "../../../public/images/logo.png";

export default function Navbar() {
  const [clickLinck, setClickLinck] = useState("home");
  const [showDiv, setShowDiv] = useState(false);
  const [closeDivLinks, setcloseDivLinks] = useState(false);

  // محتويات القائمة في متغير واحد لإعادة الاستخدام
  const esc = (
    <i
      style={{ fontSize: "24px" }}
      onClick={() => {
        setcloseDivLinks(true); // شغّل كلاس الإغلاق
        setTimeout(() => {
          setShowDiv(false); // أخفِ العنصر بعد انتهاء الأنيميشن
          setcloseDivLinks(false); // أعد الحالة الأصلية
        }, 1000); // نفس مدة transition في CSS
      }}
      className={closeDivLinks ? "closeDiv" : "fa-solid fa-xmark xmark"}
    ></i>
  );
  const linksContent = (
    <ul>
      <li>
        <a
          onClick={() => {
            setClickLinck("home");
          }}
          className={clickLinck === "home" ? "active" : null}
          href="#Home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            setClickLinck("Services");
          }}
          className={clickLinck === "Services" ? "active" : null}
          href="Services"
        >
          Services
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            setClickLinck("resume");
          }}
          className={clickLinck === "resume" ? "active" : null}
          href="#Resume"
        >
          Resume
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            setClickLinck("work");
          }}
          className={clickLinck === "work" ? "active" : null}
          href="#Work"
        >
          Work
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            setClickLinck("Contact");
          }}
          className={clickLinck === "Contact" ? "active" : null}
          href="#Contact"
        >
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <div className="box">
      <div className="container nave-bar">
        <div id="Home" className="nav">
          <div>
            {/* <h2 className="logo">
              Obada <span>Dalal</span>
            </h2> */}
            <img src={logo} style={{ width: "90px", height: "90px" }} />
          </div>

          {/* links الأساسي */}
          <div className="links">{linksContent}</div>

          {/* الأيقونة */}
          <i
            onClick={() => {
              setShowDiv(!showDiv);
              console.log(showDiv);
            }}
            className="fa-solid fa-bars-staggered bars"
          ></i>
        </div>

        {showDiv && (
          <div className={`links-media ${closeDivLinks ? "closeDiv" : ""}`}>
            {linksContent}
            {esc}
          </div>
        )}
      </div>
    </div>
  );
}
