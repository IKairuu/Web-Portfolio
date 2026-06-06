import { Identity } from "../components/identity/Identity";
import { IdentityInformation } from "../components/identity_information/IdentityInformation";
import { Stack } from "../components/stack_information/Stack";
import { useMenuStore } from "../context/menu";

export const Home = () => {
  const { isActive } = useMenuStore();
  return (
    <div
      className={`transition-all duration-800 ${isActive ? "animate-slide-down" : "animate-slide-up"}`}
    >
      <Identity />
      <hr className="text-gray-800 mx-2 my-10" />
      <IdentityInformation />
      <hr className="text-gray-800 mx-2 my-10" />
      <Stack />
    </div>
  );
};
