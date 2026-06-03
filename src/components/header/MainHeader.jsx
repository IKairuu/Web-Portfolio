import "./MainHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

export const MainHeader = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="text-3xl font-mono main-title bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        PORTFOLIO
      </div>
      <div>
        <div className="text-white flex title-labels">
          <button className="mx-2 cursor-pointer hover:bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:text-transparent hover:animate-pulse">
            Home
          </button>
          <button className="mx-2 cursor-pointer  hover:bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:text-transparent hover:animate-pulse">
            Projects
          </button>
          <button className="ml-8 text-sm font-mono border border-white p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
            Get in touch
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};
