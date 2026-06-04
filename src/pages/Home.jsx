import { Identity } from "../components/identity/Identity";
import { IdentityInformation } from "../components/identity_information/IdentityInformation";

export const Home = () => {
  return (
    <div className="m-8">
      <Identity />
      <hr className="text-gray-800 mx-2 my-10" />
      <IdentityInformation />
    </div>
  );
};
