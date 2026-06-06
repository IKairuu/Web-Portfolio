import "./MainHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const MainHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <div className="font-mono main-title text-sm sm:text-xl bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          PORTFOLIO
        </div>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="hidden md:flex">
          <div className="text-white title-labels">
            <button className="mx-2 cursor-pointer hover:bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:text-transparent hover:animate-pulse">
              Home
            </button>
            <button className="mx-2 cursor-pointer hover:bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:text-transparent hover:animate-pulse mr-8">
              Projects
            </button>
            <button className="text-sm font-mono border border-white p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
              Get in touch
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`text-white flex items-center title-labels mt-4 md:hidden ${show ? "animate-fade-in" : "animate-fade-out"}`}
      >
        <button className="mx-2 cursor-pointer hover:bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:text-transparent hover:animate-pulse">
          Home
        </button>
        <button className="mx-2 cursor-pointer hover:bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text hover:text-transparent hover:animate-pulse sm:mr-8">
          Projects
        </button>
        <button className="mx-2 sm:mx-0 text-sm font-mono border border-white p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
          Get in touch
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};
