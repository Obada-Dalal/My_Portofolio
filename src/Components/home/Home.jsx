import "./styleHome.css";
import myimage from "../../../public/images/myImage.png";
import myCV from "../../../public/CV/Obada Eid Dalal.pdf";
export default function Home() {
  return (
    <div className="box">
      <div className="container">
        <div className="pirant">
          <div className="info">
            <p>Frontend Developers</p>
            <h1>
              Hello I`m <br />
              <span> Obada Dalal</span>
            </h1>
            <p>
              I am a Front-End Web Developer passionate about crafting
              interactive, high-quality websites that captivate users and
              deliver seamless experiences. With proven expertise in modern web
              technologies, I transform ideas into engaging digital products
              that stand out.
            </p>
            <div className="social-media">
              <div className="download">
                <a href={myCV}>
                  <span>DOWNLOAD CV</span>{" "}
                  <i className="fa-solid fa-download "></i>
                </a>
              </div>
              <div className="icons">
                <div>
                  <a href="https://www.facebook.com/Obada Dl">
                    <i className="fa-brands fa-facebook facebook"></i>
                  </a>
                </div>
                <div>
                  <a href="https://github.com/Obada-Dalal">
                    <i className="fa-brands fa-github github"></i>
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/+963947584270">
                    <i className="fa-brands fa-whatsapp whatsapp"></i>
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/obadadl">
                    <i className="fa-brands fa-instagram instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="imagehero ">
              <svg width="480" height="480">
                <circle
                  className="rotate"
                  cx="210"
                  cy="210"
                  r="202"
                  fill="none"
                  stroke="var(--secandary-color)"
                  strokeWidth="3.5"
                  strokeDasharray="90 0 0 80 20 20"
                />
                <defs>
                  <clipPath id="circleView">
                    <circle cx="210" cy="210" r="200" />
                  </clipPath>
                </defs>
                <image
                  className="img"
                  href={myimage}
                  x="-110"
                  y="10"
                  width="630"
                  height="700"
                  clipPath="url(#circleView)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
