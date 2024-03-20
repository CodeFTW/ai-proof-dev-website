export const About = () => (
  <div className="flex flex-col gap-4 md:gap-10 text-secondary text-lg">
    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        About
      </h3>
      <div className="flex w-full gap-4 flex-col">
        <p>AI Proof Dev is a long-term education program for developers.</p>
        <p>
          We believe the best developers will not be replaced by AI. Our goal is
          to elevate our members to the top 1% of developers.
        </p>
        <p>
          Access our Portal to find courses and essential content for web
          developers, and engage in discussions with peers.
        </p>
        <p>
          We regularly update our content and offer access to all courses
          through a subscription model, including a lifetime one-time payment
          option.
        </p>
        <p>
          Our approach emphasizes group learning and mentorship, with mentors
          participating in live group calls to support your learning journey. We
          provide a private Discord server as well.
        </p>
        <p>
          This program is part of Quave Education. Learn more
          at{" "}
          <a
            className="text-lime-500 font-normal"
            href="https://quave.dev"
            target="_blank"
            rel="noreferrer"
          >
            quave.dev
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);
