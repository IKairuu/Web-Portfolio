import "./Identity.css";
import profile from "../../assets/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faSquareLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const Identity = () => {
  return (
    <div className="flex items-center justify-center m-8">
      <div className="flex flex-col  items-start mr-28">
        <div className="text-purple-600 font-medium text-lg my-4">Hi, I'm</div>
        <div className="name-style my-4 text-white">Kyle Allen Abandia</div>
        <div className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-semibold">
          Full-Stack Developer
        </div>
        <div className="text-start">
          I build responsive, acccessible, and beautiful web applications with
          modern technologies
        </div>
        <div className="flex my-6">
          <button className="bg-linear-to-r from-blue-500 to-purple-500 p-3 rounded-lg text-white flex items-center cursor-pointer mr-4 text-sm">
            <div className="mx-2">View My Work</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button className="border border-purple-500 p-3 rounded-lg flex text-sm text-white cursor-pointer hover:bg-purple-500">
            <div className="mx-2">Download CV</div>
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
        <div>Find me on</div>
        <div className="flex my-4">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="cursor-pointer mx-2"
            onClick={() => window.open("https://github.com/IKairuu", "_blank")}
          />
          <FontAwesomeIcon
            icon={faSquareLinkedin}
            size="2x"
            className="cursor-pointer mx-2"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kyle-abandia-799a3440a/",
                "_blank",
              )
            }
          />
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className="cursor-pointer mx-2"
            onClick={() =>
              window.open("https://www.facebook.com/ky.abandia", "_blank")
            }
          />
        </div>
      </div>
      <div>
        <img src={profile} className="rounded-3xl" />
      </div>
    </div>
  );
};
