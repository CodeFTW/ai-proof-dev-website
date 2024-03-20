import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";
import { Link } from "react-router-dom";
import { RoutePaths } from "./RoutePaths.jsx";

export const Layout = ({ children }) => {
  return (
    <div className="flex md:w-[80%] flex-col mt-4">
      <h2 className="text-4xl font-extrabold text-secondary text-center md:text-4xl gap-4 flex-col flex">
        <Link to={RoutePaths.HOME}>AI Proof Dev</Link>
      </h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
      <footer className=" gap-4 flex-col flex text-tertiary font-light mt-12">
        <div className="flex flex-col-reverse sm:flex-row text-small">
          <p className="grow pb-4">
            © {new Date().getFullYear()}{" "}
            <a
              className="text-small hover:text-primary-300"
              href="https://quave.dev"
              target="_blank"
              rel="noreferrer"
            >
              Quave
            </a>
            . All rights reserved.
          </p>
            <ul className="flex items-center gap-2 pb-4">
                <li>
                    <Link
                        to={RoutePaths.HOME}
                        className="text-small hover:text-primary-300"
                    >
                        Home
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <Link
                        to={RoutePaths.TERMS_OF_USE}
                        className="text-small hover:text-primary-300"
                    >
                        Terms of Use
                    </Link>
                </li>
                <li>|</li>
                <li>
                    <a
                        className="text-small hover:text-primary-300"
                        href="https://twitter.com/aiProofDev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </li>
            </ul>
        </div>
      </footer>
    </div>
  );
};
