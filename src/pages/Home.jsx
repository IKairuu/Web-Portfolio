import { Identity } from "../components/identity/Identity";
import { IdentityInformation } from "../components/identity_information/IdentityInformation";
import { Stack } from "../components/stack_information/Stack";

export const Home = () => {
  return (
    <div>
      <Identity />
      <hr className="text-gray-800 mx-2 my-10" />
      <IdentityInformation />
      <hr className="text-gray-800 mx-2 my-10" />
      <Stack />
    </div>
  );
};
