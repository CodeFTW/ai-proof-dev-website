import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";
import {Link} from "react-router-dom";
import {RoutePaths} from "./RoutePaths.jsx";

export const Layout = ({ children }) => {
  return (
    <div className="flex md:w-[80%] flex-col mt-4">
      <h2 className="text-4xl font-extrabold text-secondary text-center md:text-4xl gap-4 flex-col flex">
        <Link
            to={RoutePaths.HOME}
        >AI Proof Dev</Link>
      </h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </div>
  );
};
