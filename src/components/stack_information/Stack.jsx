import { useRef, useState } from "react";
import { useStack } from "../../context/stack";

export const Stack = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { stacks } = useStack();
  const stackRef = useRef(null);
  const listItems = stacks.map((items) => {
    return (
      <li>
        <div className="bg-[#090e1a] border border-gray-800 flex flex-col items-center p-3 rounded-lg size-20">
          {items.imgSrc ? (
            <img src={items.imgSrc} className="size-7" />
          ) : (
            <items.icon className="h-full w-full" />
          )}
          <div className="text-white text-sm mt-2">{items.title}</div>
        </div>
      </li>
    );
  });
  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold text-xs text-purple-500">TECH STACK</div>
      <div className="text-white text-xl">Technologies I use</div>
      <div className="flex flex-col items-center mt-3">
        <ul
          ref={stackRef}
          className={`flex flex-wrap transition-all duration-500 ${seeMore ? " sm:overflow-y-clip sm:max-h-220 overflow-y-scroll max-h-40 " : "overflow-hidden max-h-20"} justify-center gap-3`}
        >
          {listItems}
        </ul>
        <button
          className="cursor-pointer bg-transparent border text-white border-white rounded-full py-2 px-6 mt-4 hover:bg-white hover:text-black transition-colors duration-500"
          onClick={() => {
            stackRef.current.scrollTo({ top: 0, behavior: "smooth" });
            setSeeMore(!seeMore);
          }}
        >
          <div>{seeMore ? "See Less" : "See More"}</div>
        </button>
      </div>
    </div>
  );
};
