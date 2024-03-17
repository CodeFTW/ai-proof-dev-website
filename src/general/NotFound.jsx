import { RoutePaths } from "./RoutePaths.jsx";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-10 text-secondary text-lg">
      <div className="flex w-full flex-col justify-between mt-3 grow">
        <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
          Page Not Found
        </h3>
        <Link className={"text-lime-500 font-normal"} to={RoutePaths.HOME}>
          Go to Home
        </Link>
      </div>
    </div>
  );
};
