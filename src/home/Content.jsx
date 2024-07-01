import { RoutePaths } from "../general/RoutePaths.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const CourseSection = ({ title, lessons }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b mb-2 border-neutral-200 pb-2">
      <div
        className="flex w-full cursor-pointer items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">
          <span className="block font-medium">{title}</span>
          <span className="block opacity-50">{lessons.length} lessons</span>
        </span>
        <i className="ml-6 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                !isOpen
                  ? "M19.5 8.25l-7.5 7.5-7.5-7.5"
                  : "M4.5 15.75l7.5-7.5 7.5 7.5"
              }
            />
          </svg>
        </i>
      </div>
      {isOpen && (
        <ul className="py-2">
          {lessons.map((lesson, index) => (
            <li
              key={index}
              className="flex items-center rounded p-2 hover:bg-primary-100"
            >
              <label className="ml-3 text-sm cursor-text">{lesson}</label>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const CourseOutline = ({ content }) => {
  return (
    <ul>
      {content.map((section, index) => (
        <CourseSection
          key={index}
          title={section.title}
          lessons={section.lessons}
        />
      ))}
    </ul>
  );
};

function Course({ name, description, content }) {
  return (
    <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
      <p className="mt-3">{name}</p>
      {description && <p className="text-sm opacity-60">{description}</p>}

      {content && <CourseOutline content={content} />}
    </h2>
  );
}

export const Content = () => (
  <div className="flex flex-col gap-4 md:gap-10">
    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        Content
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>✔︎ 100% based on real-life experiences.</p>
        <p>
          ✔︎ ︎Focus on productivity and how to achieve great results for
          yourself or the company for which you work.
        </p>
        <p>
          ✔︎ How to be efficient with the best tools out here, including IDEs,
          Dev Tools, AI and more.
        </p>
        <p className="mt-6">
          ⭐ Read all lists below! First, we list content that's published and
          currently being published. Then we present our ideas for future
          content. You'll understand the topics if you're a developer. The last
          section is{" "}
          <strong>hard to understand just by reading the topics</strong>. You'll
          need to watch the content as they're either uncommon for developers or
          approached from a different angle! ⭐
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow gap-4">
      <h3 className="text-tertiary text-2xl flex-col flex md:ml-0">
        Published Courses
      </h3>
      <Course
        name="Refactoring"
        description="Learn practical code refactoring techniques for today's software development challenges. This course covers important concepts like declarative programming and functional approaches, with plenty of hands-on exercises. You'll work on real-world projects, including improving code organization, implementing effective testing strategies, and optimizing for maintainability. Suitable for developers who want to update their skills and write better code in an industry that's constantly changing."
        content={[
          {
            title: "1. Introduction",
            lessons: [
              "1.1 What is a Refactor?",
              "1.2 The Importance of Refactor in the Age of AI",
            ],
          },
          {
            title: "2. Concepts",
            lessons: [
              "2.1 Imperative vs. Declarative",
              "2.2 Enumerators",
              "2.3 OOP vs Functional",
              "2.4 Bonus: Enums in Javascript",
            ],
          },
          {
            title: "3. Hands-on",
            lessons: [
              "3.1 Animated Twitter Like Button",
              "3.2 Code Time: Create Groups",
              "3.3 Tickets Available - Code Organization",
              "3.4 Tickets Available - Tests and GitHub Actions",
              "3.5 Tickets Available - Declarative Filters",
              "3.6 Tickets Available - Unit Tests for Enum Correctness",
              "3.7 Tickets Available - Automatic checks before GitHub action",
              "3.8 Tickets Available - Fast way to write tests for multiple cases",
              "3.9 Tickets Available - Compose functions",
              "3.10 Tickets Available - Providing default fields for Enums",
              "3.11 Tickets Available - Orthogonal Behaviors",
            ],
          },
          {
            title: "4. Conclusion",
            lessons: ["4.1 Don't do complete rewrites", "4.2 Final Thoughts"],
          },
        ]}
      />
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow gap-4">
      <h3 className="text-tertiary text-2xl flex-col flex md:ml-0">
        Courses In Progress
      </h3>
      <Course
        name="AI Framework"
        description="Learn how to effectively work with large language models in real-world applications. This course covers the key components of an AI framework, including prompt engineering, handling constraints, and practical implementation. You'll get hands-on experience with popular tools and models, and learn how to optimize your AI interactions for better performance and results. Suitable for developers who want to go beyond basic AI interactions and build more sophisticated, efficient AI-powered applications."
        content={[
          {
            title: "1. AI Framework",
            lessons: [
              "1.1 Why a Framework?",
              "1.2 Components of the Framework",
              "1.3 Prompt Engineering",
              "1.4 Constraints",
            ],
          },
          {
            title: "2. Tools and Implementation",
            lessons: [
              "2.1 Programming with JavaScript",
              "2.2 Using LangChain",
              "2.3 Monitoring with LangSmith",
              "2.4 Popular Models (OpenAI, Llama, Gemini, Claude)",
              "2.5 Infrastructure (OpenAI API, Groq, Google Cloud, Anthropic)",
            ],
          },
          {
            title: "3. Practical Considerations",
            lessons: [
              "3.1 Combining Different Models",
              "3.2 Streaming Responses",
              "3.3 Sanitizing Outputs",
              "3.4 Handling Multiple Languages",
            ],
          },
          {
            title: "4. Best Practices and Tips",
            lessons: [
              "4.1 Prompt Optimization",
              "4.2 Dealing with Long Conversations",
              "4.3 Balancing Specificity and Creativity in Prompts",
            ],
          },
          {
            title: "5. Hands-on",
            lessons: [
              "5.1 Real World Example 1",
              "5.2 Real World Example 2",
              "5.3 Real World Example 3",
            ],
          },
        ]}
      />
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow gap-4">
      <h3 className="text-tertiary text-2xl flex-col flex md:ml-0">
        Special Courses
      </h3>
      <Course
        name="Backstage"
        description="Ever wondered how a real web application comes together? This isn't your typical structured course - it's a raw, unfiltered look at actual development in action. Watch as I build portal.aiproofdev from scratch, using Node.js, React, Tailwind, and Meteor. You'll see the real-time coding process, complete with mistakes, problem-solving, and decision-making on the fly. It's perfect for developers who want to see how theory translates into practice, and how to handle the unexpected challenges that crop up in real-world projects. No polished presentations or rehearsed demos - just authentic, hands-on web development as it happens."
        content={[
          {
            title: "1. Introduction",
            lessons: ["1.1 What is the Portal and Why we use it"],
          },
          {
            title: "2. Setup",
            lessons: [
              "2.1 Change English version",
              "2.2 Add domain to Route53",
            ],
          },
          {
            title: "3. Video Streaming Integration",
            lessons: [
              "3.1 Embedded Video Player",
              "3.2 Panda Player or YouTube Player",
            ],
          },
          {
            title: "4. Whitelabel",
            lessons: [
              "4.1 Opengraph Tags and Styles",
              "4.2 Theme with TailwindCSS",
            ],
          },
        ]}
      />
      <Course
        name="Group Calls"
        description="Where you get direct access to weekly recorded live calls with Filipe Névola. Each session provides you the opportunity to ask questions, exchange ideas, and share real experiences with peers and like-minded developers. Every week, you'll gain practical insights and tips that are immediately applicable to your projects, ensuring continuous learning and collaboration. Of course, if you can join live it's even better!"
      />
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        List of what you will probably get in the future
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p className="mt-3">
          The contents listed here are not a promise of what we will deliver. We
          have listed our ideas for useful content to be published over time,
          but we can change it at any time.
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow gap-4">
      <h2 className="text-md text-tertiary md:text-lg gap-2 flex-col flex md:ml-0 font-light">
        <p>• Compilers</p>
        <p>• JIT (Just-In-Time Compilation)</p>
        <p>• Node.js internals</p>
        <p>• DNS, A Record, and CNAME understanding</p>
        <p>• Closures as an alternative to classes</p>
        <p>• Functional programming and operations: filter, map, reduce</p>
        <p>• Bash scripting (zsh, oh-my-zsh)</p>
        <p>• Git operations: git rebase, git tag, git bisect, git reset</p>
        <p>• Jenkins (for CI/CD)</p>
        <p>• WebSocket communication</p>
        <p>• Single Page Applications vs Server Side Rendering</p>
        <p>• Deep understanding of Node.js for server-side operations</p>
        <p>• Express.js and Meteor.js framework specifics</p>
        <p>
          • SQL and NoSQL databases: Postgres and MongoDB detailed operations
        </p>
        <p>
          • REST, APIs, DDP, Meteor Methods, and Meteor Publications intricacies
        </p>
        <p>• GraphQL: Deep understanding of Queries and Mutations</p>
        <p>
          • React: React as a function, React Hooks, React Error boundary
          tactics, React Suspense.
        </p>
        <p>• Deploy tactics on AWS and zCloud.ws</p>
        <p>• SSL encryption techniques: Let's Encrypt, Wildcard</p>
        <p>
          • Performance Testing: Bundle size optimizations, Dynamic/Nested
          imports, Chrome Dev Tools, Node.js CPU Profile utility, React
          performance testing
        </p>
        <p>
          • End-to-end Automated Testing: Playwright; Unit testing: Jest,
          Snapshots
        </p>
        <p>
          • Logs and Monitoring: Datadog, Monitors, Prometheus, Alerts Manager,
          Grafana
        </p>
        <p>• Transactional Email: postmark</p>
        <p>• Storage solutions: AWS S3</p>
        <p>• Payment Gateways: Stripe</p>
        <p>
          • Authentication methods: Password, Passwordless, OAuth (Facebook,
          Google, Apple Auth)
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        More stuff
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p className="mt-3">
          You probably won't understand what is inside this list, but that is
          the secret sauce of our content.
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow gap-4">
      <h2 className="text-md text-tertiary md:text-lg gap-2 flex-col flex md:ml-0 font-light">
        <p>• TDD is not for you</p>
        <p>• Always ready as fast as possible</p>
        <p>• Don't use your file explorer</p>
        <p>• Copy and paste is fine</p>
        <p>• Find and replace is your friend</p>
        <p>• No loose strings</p>
        <p>• Enums are your friend</p>
        <p>• Declarative over imperative</p>
        <p>• No splitting files for no reason</p>
        <p>• Don't write test for things that don't change</p>
        <p>• Don't test simple logics</p>
        <p>• Don't mutate objects</p>
        <p>• Don't use indexes or anonymous</p>
        <p>• Don't use for and while</p>
        <p>• Don't do full project rewrites</p>
        <p>• Don't read books</p>
        <p>• Always study</p>
        <p>• Always ready to learn</p>
        <p>• Organize content</p>
        <p>• Net worth</p>
        <p>• Track time </p>
        <p>• Effort vs benefit</p>
        <p>• Compounding effects</p>
        <p>• The Infinite Game</p>
        <p>• One eye on the fish, another on the cat</p>
      </h2>
    </div>
    <div className="flex w-full flex-col justify-between mt-3 grow gap-4">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0">
        What do you think?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>Is it too much? Too confusing? Too boring? Too hard? Too easy?</p>
        <p>
          Go back to our{" "}
          <Link className="text-lime-500 font-normal" to={RoutePaths.HOME}>
            home page
          </Link>{" "}
          and join our community.
        </p>
      </h2>
    </div>
  </div>
);
