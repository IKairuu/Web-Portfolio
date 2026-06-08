import { useProjects } from "../../context/projects";
import "./Project.css";

export const Projects = () => {
  const { projects } = useProjects();
  const projectList = projects.map((items) => {
    const stacks = items.stack.map((tech) => {
      return (
        <li className="bg-[#141529] border border-gray-800 py-2 px-4 rounded-xl text-white text-xs">
          {tech}
        </li>
      );
    });
    return (
      <li
        className="h-70 w-70 flex flex-none flex-col rounded-lg border border-gray-800 cursor-pointer transition-all hover:-translate-y-5"
        onClick={() => window.open(items.link, "_blank")}
      >
        <div className="flex-1 rounded-t-lg">
          <img src={items.image} className="rounded-t-lg w-full h-40" />
        </div>
        <div className="flex-1 h-full bg-[#090e1a] border border-gray-800 rounded-b-lg p-2">
          <div className="font-bold text-white">{items.title}</div>
          <div className="text-slate-500 text-xs custom-scroll-y h-20">
            {items.description}
          </div>
          <ul className="flex mt-2 overflow-x-auto gap-2 custom-scroll-x pb-2">
            {stacks}
          </ul>
        </div>
      </li>
    );
  });
  return (
    <div className="flex flex-col items-center sm:items-start mt-3">
      <div className="flex items-center w-full border justify-between">
        <div className="flex flex-col items-center sm:items-start">
          <div className="text-purple-500 font-semibold">PROJECTS</div>
          <div className="text-white text-lg font-bold sm:text-xl">
            SOME OF MY WORK
          </div>
        </div>
        <button className="hidden sm:flex ">
          <div>View All Projects</div>
        </button>
      </div>

      <ul className="flex custom-scroll-main w-full h-100 gap-4 mt-5 p-5">
        {projectList}
      </ul>
    </div>
  );
};
