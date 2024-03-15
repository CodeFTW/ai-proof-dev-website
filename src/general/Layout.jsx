import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";

export const Layout = ({ children }) => {
  return (
    <div className="flex md:w-[80%] flex-col mt-4">
      <h2 className="text-4xl font-extrabold text-secondary text-center md:text-4xl gap-4 flex-col flex">
        <a
            href="/"
        >AI Proof Dev</a>
      </h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </div>
  );
};
