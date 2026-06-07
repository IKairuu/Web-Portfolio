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
    <div className="flex flex-col md:flex-row items-center justify-center my-5">
      <div className="md:hidden">
        <img src={profile} className="rounded-3xl size-40" />
      </div>
      <div className="flex flex-col items-center sm:items-start sm:mr-10">
        <div className="text-purple-600 font-medium text-md my-2">Hi, I'm</div>
        <div className="name-style my-2 text-3xl sm:my-4 text-white">
          Kyle Allen Abandia
        </div>
        <div className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-semibold">
          Full-Stack Developer
        </div>
        <div className="text-center md:text-start">
          I build responsive, acccessible, and beautiful web applications with
          modern technologies
        </div>
        <div className="flex my-6">
          <button className="bg-linear-to-r from-blue-500 to-purple-500 p-3 rounded-lg text-white flex items-center cursor-pointer mr-4 text-sm hover:-translate-y-2 hover:transition-all hover:duration-300">
            <div>View My Work</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button className="border border-purple-500 p-3 rounded-lg flex text-sm text-white cursor-pointer hover:bg-purple-500 hover:-translate-y-2 hover:transition-all hover:duration-300">
            <div>Download CV</div>
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
        <div>Find me on</div>
        <div className="flex my-4">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="cursor-pointer mx-2 hover:transition-colors duration-300 ease-in-out hover:text-white"
            onClick={() => window.open("https://github.com/IKairuu", "_blank")}
          />
          <FontAwesomeIcon
            icon={faSquareLinkedin}
            size="2x"
            className="cursor-pointer mx-2 hover:transition-colors duration-300 ease-in-out hover:text-white"
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
            className="cursor-pointer mx-2 hover:transition-colors duration-300 ease-in-out hover:text-white"
            onClick={() =>
              window.open("https://www.facebook.com/ky.abandia", "_blank")
            }
          />
        </div>
      </div>
      <div className="hidden md:flex size-full">
        <img src={profile} className="rounded-3xl" />
      </div>
    </div>
  );
};
