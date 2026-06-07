import { useState } from "react";
import { useStack } from "../../context/stack";

const CreateStack = (props) => {
  const { stacks } = useStack();
  const { seeState } = props;
  const listItems = stacks.map((items) => {
    return (
      <li>
        <div className="bg-[#090e1a] border border-gray-800 flex flex-col items-center p-3 rounded-lg">
          <items.icon className="h-10 w-10" />
          <div>{items.title}</div>
        </div>
      </li>
    );
  });
  return (
    <ul
      className={`flex flex-wrap transition-all duration-500 ${seeState ? "overflow-y-clip max-h-50" : "overflow-hidden max-h-24"} justify-center gap-3`}
    >
      {listItems}
    </ul>
  );
};

export const Stack = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold text-xs text-purple-500">TECH STACK</div>
      <div className="text-white text-xl">Technologies I use</div>
      <div className="flex flex-col items-center">
        <CreateStack seeState={seeMore} />
        <div className="bg-transparent border text-white border-white rounded-full py-2 px-6 mt-4 hover:bg-white hover:text-black transition-colors duration-500">
          <button
            className="cursor-pointer "
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};
