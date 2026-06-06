import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faGraduationCap,
  faLocationDot,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoContainers = (props) => {
  const { icon, labelTitle, children } = props;
  return (
    <div className="bg-[#090e1a] border border-gray-800 w-60 rounded-lg flex items-center p-2 my-2">
      <div className="bg-[#141529] flex items-center justify-center rounded-lg h-10 w-10 border border-gray-800 mr-3">
        <FontAwesomeIcon icon={icon} size="md" className="text-blue-500" />
      </div>
      <div className="flex flex-col items-start">
        <div className="text-xs">{labelTitle}</div>
        <div className="font-semibold text-white">{children}</div>
      </div>
    </div>
  );
};

export const IdentityInformation = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-start">
        <div className="text-purple-500 font-semibold">ABOUT ME</div>
        <div className="text-white font-semibold text-2xl">Get to know me!</div>
        <div className="text-left text-sm mt-2 mr-20">
          I'm a passionate frontend who loves turning ideas into interactive and
          user-friendly web experience. I enjoy learning new technologies and
          constantly improving my skills.
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col items-start mx-2">
          <InfoContainers icon={faCalendarDays} labelTitle="Experience">
            1+ Year
          </InfoContainers>
          <InfoContainers icon={faGraduationCap} labelTitle="Education">
            Computer Science
          </InfoContainers>
        </div>
        <div className="flex flex-col mx-2">
          <InfoContainers icon={faTerminal} labelTitle="Projects">
            3
          </InfoContainers>
          <InfoContainers icon={faLocationDot} labelTitle="Location">
            Philippines
          </InfoContainers>
        </div>
      </div>
    </div>
  );
};
