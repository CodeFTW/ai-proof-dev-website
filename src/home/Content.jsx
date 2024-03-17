import { RoutePaths } from "../general/RoutePaths.jsx";
import {Link} from "react-router-dom";

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
          ⭐ Read both lists below, please! The first one is easy to understand
          - assuming you are a developer - and the second one is{" "}
          <strong>
            hard to understand by the topics, only watching the content
          </strong>
          ! ⭐
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        List of what you will get (or not)
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
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
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
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
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
        <p>• Real example 1</p>
        <p>• Real example 2</p>
        <p>• Real example 3</p>
        <p>• Real example 4</p>
        <p>• Real example ...</p>
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
