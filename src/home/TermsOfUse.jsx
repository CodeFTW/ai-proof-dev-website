import {Link} from "react-router-dom";
import {RoutePaths} from "../general/RoutePaths.jsx";

export const TermsOfUse = () => (
  <div className="flex flex-col gap-4 md:gap-10 text-secondary text-lg">
    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        Terms of Use
      </h3>
      <section>
        <p>When you join AI Proof Dev as member you agree to the following:</p>
        <ul className="list-disc">
          <li>
            You will dedicate as much as possible to do all the proposed
            activities
          </li>
          <li>
            You permit us to publish publicly any content you participate during
            the program, which includes code, videos with you and everything
            else.
          </li>
          <li>You will join the live activities as much as possible</li>
          <li>
            You know that we are assuming you have at least basic code knowledge
            and you are able to learn by yourself
          </li>
          <li>
            You agree to respect 100% of our{" "}
            <Link
              className="text-lime-500 font-normal"
              to={RoutePaths.CODE_OF_CONDUCT}
            >
              Code of Conduct
            </Link>
          </li>
        </ul>
        <h2
          className="text-tertiary text-xl my-4"
          id="enforcement-responsibilities"
        >
          Mentors
        </h2>
        <p>
          Mentors will stop any discussions or questions that are out of the
          scope of our program.
        </p>
        <p>We need to do this to respect everyone's times.</p>
        <h2 className="text-tertiary text-xl my-4" id="enforcement">
          Enforcement
        </h2>
        <p>
          We will avoid kicking members out as much as possible but this will be
          done if no other solution is found.
        </p>
      </section>
    </div>
  </div>
);
