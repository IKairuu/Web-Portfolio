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
      className={`flex flex-wrap ${seeState ? null : "overflow-hidden h-24"} justify-center gap-3 border`}
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
      <div>
        <CreateStack seeState={seeMore} />
        <button onClick={() => setSeeMore(!seeMore)}>See More</button>
      </div>
    </div>
  );
};
