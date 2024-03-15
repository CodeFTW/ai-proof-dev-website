export const Home = () => (
  <div className="flex md:w-[80%] flex-col gap-4 md:gap-10 mt-4">
    <h2 className="text-4xl font-extrabold text-secondary text-center md:text-4xl gap-4 flex-col flex">
      AI Proof Dev
    </h2>
    <div className="mt-3 flex w-full flex-col justify-center md:justify-start md:flex-row md:items-center">
      <div className="flex justify-center md:justify-start w-full md:w-1/3">
        <div className="w-1/3 md:w-full">
          <img src="./logo.png" alt="AI Proof Dev Logo" />
        </div>
      </div>
      <div className="flex w-full flex-col justify-between mt-3 grow">
        <h2 className="text-2xl text-tertiary md:text-3xl gap-4 flex-col flex md:ml-0">
          <p>Don't be afraid of AI. The Top 1% Developers are here to stay.</p>
          <p>What you should do instead? Become one of them 👇🏻</p>
        </h2>
      </div>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        What we do?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        We teach everything we believe and practice in software development. We
        deliver code to production every day for more than 15 years.
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        How are we different? 🤔
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          ✔︎ Learn with real-world projects, yes, the content is based on a
          real project.
        </p>
        <p>
          ✔︎ ︎Battle-tested content, yes, if the content were bad, the project
          would have failed.
        </p>
        <p>
          ✔︎ Don't follow the herd, yes, we won't teach you clean code and
          buzzwords.
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        How does it work?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          ✔︎ Text and video content, yes, we have contents in both formats.
        </p>
        <p>✔︎ Live group mentorship calls, yes, you can ask questions live.</p>
        <p>
          ✔︎ Real use cases to implement, yes, the only way to learn is coding
          real stuff.
        </p>
        <p>
          ✔︎ Private channel on Discord, yes, you can ask questions anytime and
          get help from other members.
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        What warranties do I have that I will become one of the top 1%?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          No warranties at all! We will treat you as an adult. You can ask for a
          refund in 7 days tho.
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        Who's going to produce the content?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          Filipe Névola. A developer with 15 years of experience. He has worked
          on multiple projects and companies worldwide including NBA, Toyota,
          and IBM.
        </p>
        <p>
          Currently, he delivers code to production every day at{" "}
          <a
            className="text-lime-500 font-normal"
            href="https://quave.dev"
            target="_blank"
            rel="noreferrer"
          >
            Quave
          </a>
          , his company, primarily for{" "}
          <a
            className="text-lime-500 font-normal"
            href="https://zcloud.ws"
            target="_blank"
            rel="noreferrer"
          >
            zCloud.ws
          </a>
          , but also for various client projects.
        </p>
        <p>
          <a
            className="text-lime-500 font-normal"
            href="https://filipenevola.com"
            target="_blank"
            rel="noreferrer"
          >
            Read more
          </a>{" "}
          or subscribe to{" "}
          <a
            className="text-lime-500 font-normal"
            href="https://news.lemeno.io/en/filipe-nevola"
            target="_blank"
            rel="noreferrer"
          >
            his newsletter
          </a>
          .
        </p>
      </h2>
    </div>
    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        Pricing
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p className="flex items-center gap-2">
          30 days access: <span className="line-through">$100</span> $25*
          <span>
            <a
              className="text-lime-500 font-normal ml-8"
              href="https://buy.stripe.com/9AQdU78ZEfD94pO8wZ"
              rel="noreferrer"
            >
              Pay now
            </a>
          </span>
        </p>
        <p className="flex items-center gap-2">
          365 days access: <span className="line-through">$600</span> $150*
          <span>
            <a
              className="text-lime-500 font-normal ml-2"
              href="https://buy.stripe.com/8wM7vJ7VA8aH5tS14y"
              rel="noreferrer"
            >
              Pay now
            </a>
          </span>
        </p>
        <p className="flex items-center gap-2">
          Lifetime access: <span className="line-through">$1,500</span> $375*
          <span>
            <a
              className="text-lime-500 font-normal ml-2"
              href="https://buy.stripe.com/28o6rFejY4Yvf4scNh"
              rel="noreferrer"
            >
              Pay now
            </a>
          </span>
        </p>
        <p className="mt-3">
          * 75% discount while no content is published. Content will be released
          weekly starting on March 25th 2024.
        </p>
        <p>
          At least 16 contents will be publish in the next 4 months (until July
          31st 2024). All prices in this page are in USD but you can also pay in
          R$.
        </p>
        <p>Payment links will go to Quave's Stripe account.</p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        FAQ
      </h3>
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        ∙ Why should I buy now?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          You are free to buy whenever you want. You are also free not to buy :)
        </p>
        <p>
          The benefit of buying right now is the 75% discount. It will be gone
          once we start to publish the content.
        </p>
      </h2>
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        ∙ Are the live group calls recorded?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          Yes, they are. So if you can't join you can watch it later.
        </p>
        <p>
          Also, you can send questions in advance so we can answer your questions even if you can't join.
        </p>
      </h2>
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4 mt-4">
        ∙ I can't buy now, how can I receive updates?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          Filipe's newsletter will be the main channel to communicate with you
          as you are not part of AI Proof Dev community on Discord.
        </p>
        <p>
          <a
            className="text-lime-500 font-normal"
            href="https://news.lemeno.io/en/filipe-nevola"
            target="_blank"
            rel="noreferrer"
          >
            Subscribe now
          </a>
          .
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        Questions? Email filipe@quave.dev
      </h3>
    </div>
  </div>
);
