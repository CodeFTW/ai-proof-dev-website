export const CodeOfConduct = () => (
  <div className="flex flex-col gap-4 md:gap-10 text-secondary text-lg">
    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        Code of Conduct
      </h3>
      <section>
        <h2 className="text-tertiary text-xl my-4" id="our-standards">
          Our Standards
        </h2>
        <p>
          Examples of behavior that contributes to a positive environment for
          our project include:
        </p>
        <ul className="list-disc">
          <li>Demonstrating empathy and kindness toward other people</li>
          <li>
            Being respectful of differing opinions, viewpoints, and experiences
          </li>
          <li>Giving technical and direct feedback</li>
          <li>
            Accepting responsibility and apologizing to those affected by our
            mistakes, and learning from the experience
          </li>
          <li>
            Focusing on what is best not just for us as individuals, but for the
            overall project
          </li>
        </ul>
        <p>Examples of unacceptable behavior include:</p>
        <ul className="list-disc">
          <li>
            The use of sexualized language or imagery, and sexual attention or
            advances of any kind
          </li>
          <li>Trolling, insulting or offensive comments</li>
          <li>
            Publishing any private information shared inside the project
            activities without explicit permission
          </li>
        </ul>
        <h2
          className="text-tertiary text-xl my-4"
          id="enforcement-responsibilities"
        >
          Mentors
        </h2>
        <p>
          Mentors are responsible for clarifying and enforcing our standards of
          acceptable behavior and will take appropriate and fair corrective
          action in response to any behavior that they deem inappropriate.
        </p>
        <p>
          Mentors remove, edit, or reject comments, commits, code, and other
          contributions that are not aligned to this Code of Conduct, and will
          communicate reasons for moderation decisions when appropriate.
        </p>
        <h2 className="text-tertiary text-xl my-4" id="scope">
          Scope
        </h2>
        <p>
          This Code of Conduct applies within all project spaces, and also
          applies when an individual is officially representing the project in
          public spaces.
        </p>
        <h2 className="text-tertiary text-xl my-4" id="enforcement">
          Enforcement
        </h2>
        <p>
          Instances of unacceptable behavior may be reported to the mentors for
          enforcement at aiproofdev@quave.ve. All complaints will be reviewed
          and feedback will be provided.
        </p>
        <h2 className="text-tertiary text-xl my-4" id="enforcement-guidelines">
          Actions
        </h2>
        <p>Mentors will perform these actions when necessary:</p>
        <h3 id="1-correction">1. Correction</h3>
        <p>
          <strong>Mistakes</strong>: Communicate the author and fix the possible
          results. With a clear warning about the behavior.
        </p>
        <h3 id="4-permanent-ban">2. Permanent Ban</h3>
        <p>
          <strong>Recurrence</strong>: Demonstrating a pattern of violation of
          standards will lead to Permanent Ban from the project.
        </p>
        <h2 className="text-tertiary text-xl my-4" id="attribution">
          Attribution
        </h2>
        <p>
          This Code of Conduct was inspired by{" "}
          <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/">
            Contributor Covenant
          </a>
          , version 2.0.
        </p>
      </section>
    </div>
  </div>
);
