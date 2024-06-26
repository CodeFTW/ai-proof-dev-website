import { useState } from "react";
import { Link } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths.jsx";

const ItemWithTitle = ({ title, children, collapsable }) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsable);
  return (
    <>
      <h3
        className={`text-tertiary text-2xl gap-4 flex-col flex md:ml-0 ${collapsable ? "cursor-pointer" : ""}`}
        onClick={() => collapsable && setIsCollapsed(!isCollapsed)}
      >
        {title}
        {collapsable && !isCollapsed && " ^"}
      </h3>
      {!isCollapsed && (
        <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
          {children}
        </h2>
      )}
    </>
  );
};
export const Home = () => (
  <div className="flex flex-col gap-4 md:gap-10">
    <div className="mt-3 flex w-full flex-col justify-center md:justify-start md:flex-row md:items-center">
      <div className="flex justify-center md:justify-start w-full md:w-1/3">
        <div className="w-1/3 md:w-full">
          <img src="./logo.png" alt="AI Proof Dev Logo" />
        </div>
      </div>
      <div className="flex w-full flex-col justify-between mt-3 grow">
        <h2 className="text-2xl text-tertiary md:text-3xl gap-4 flex-col flex md:ml-0">
          <p>
            Don't be afraid of AI. The best Developers (aka 1% Devs) will not be
            replaced by AI.
          </p>
          <p>What you should do instead? Become the 1%. How?👇🏻</p>
        </h2>
      </div>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        What we do for you?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <span>
          We teach you everything we believe and practice in software
          development. We have delivered code to production every day for more
          than 15 years and we are part of a profitable software development{" "}
          <a
            className="text-lime-500 font-normal"
            href="https://quave.dev"
            target="_blank"
            rel="noreferrer"
          >
            agency
          </a>{" "}
          founded in 2013.
        </span>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        Why you should give us money?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          ✔︎ We have skin in the game: our company newcomers are trained now
          with the same content as you. The quality of this content will define
          the future of our company.
        </p>
        <p>
          ✔︎ We have battle-tested everything, all the topics are used in real
          life projects successfully in different contexts. New content will be
          added weekly, forever.
        </p>
        <p>
          ✔︎ The Infinite Game: We don't follow the herd, we don't teach the
          latest trend or quick ways for you to learn a framework. We need
          better developers so we decided to train them ourselves with
          technologies to deliver results for profitable companies worldwide
          across Web and Mobile applications. Your goal should be to get better
          every single day, forever.
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        How does it work?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          ✔︎ We publish content in video and text. You watch or read and then
          code to absorb everything we taught.
        </p>
        <p>
          ✔︎ We host live group mentorship calls. You come prepared to ask
          questions.
        </p>
        <p>
          ✔︎ We suggest real use cases for you to implement. You implement
          everything we suggest and more.
        </p>
        <p>
          ✔︎ We review your code. You will show us your code from the content
          and also real use cases.
        </p>
        <p>
          ✔︎ We are on a private Discord with you. You ask questions anytime
          and get help from other members and ourselves.
        </p>
        <p>
          ✔︎ We hire the best. You may receive an offer to{" "}
          <a
            className="text-lime-500 font-normal"
            href="https://github.com/quavedev/join"
            target="_blank"
            rel="noreferrer"
          >
            work with us
          </a>{" "}
          if you are great.
        </p>
        <p>
          ✔︎ We don't babysit. You need to work hard, really hard and be
          self-motivated.
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        What warranties do you have of becoming the top 1%?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>No warranties at all! We will treat you like an adult.</p>
        <p>
          AI Proof Dev is not about us, it's about you. We will give you the
          map, the compass, and the tools. You will have to walk the path. There
          is no shortcuts. To be a top 1% developer you will have to work hard,
          every single day, forever.
        </p>
        <p className="font-semibold">
          If you are lazy, if you are not self-motivated, if you are not willing
          to work hard, don't buy.
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        Who's the mentor?
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
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4 md:items-start items-center">
        Pricing
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p className="flex items-center gap-2 flex-col md:flex-row justify-center md:justify-start md:mb-0 mb-6">
          <span>30 days access:</span>
          <span>
            <span className="line-through">$100</span> $50*
          </span>
          <span>
            <a
              className="text-lime-500 font-normal md:ml-8"
              href="https://buy.stripe.com/cN25mp0LYe8I9nG147?prefilled_promo_code=OFF50"
              rel="noreferrer"
            >
              Pay now
            </a>
          </span>
        </p>
        <p className="flex items-center gap-2 flex-col md:flex-row justify-center md:justify-start md:mb-0 mb-6">
          <span>365 days access:</span>
          <span>
            <span className="line-through">$600</span> $300*
          </span>
          <span>
            <a
              className="text-lime-500 font-normal md:ml-2"
              href="https://buy.stripe.com/3cs6qtgKW9Ss0RadQU?prefilled_promo_code=OFF50"
              rel="noreferrer"
            >
              Pay now
            </a>
          </span>
        </p>
        <p className="flex items-center gap-2 flex-col md:flex-row justify-center md:justify-start md:mb-0 mb-6">
          <span>Lifetime access:</span>
          <span>
            <span className="line-through">$1,500</span> $750*
          </span>
          <span>
            <a
              className="text-lime-500 font-normal md:ml-2"
              href="https://buy.stripe.com/bIYcORamy4y88jC6ot?prefilled_promo_code=OFF50"
              rel="noreferrer"
            >
              Pay now
            </a>
          </span>
        </p>
        <p className="mt-3">* 50% discount for limited time.</p>
        <p>All prices in this page are in USD but you can also pay in R$.</p>
        <p>Payment links will go to Quave's Stripe account.</p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow gap-4">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0">
        FAQ
      </h3>
      <ItemWithTitle title="∙ Where is the table of contents?" collapsable>
        <p>
          You can see a list of what we plan to publish in our{" "}
          <Link className="text-lime-500 font-normal" to={RoutePaths.CONTENT}>
            Content
          </Link>{" "}
          page.
        </p>
        <p>
          We publish new content weekly on our closed platform only for paid members.
        </p>
      </ItemWithTitle>
      <ItemWithTitle
        title="∙ Is formal education in Computer Science required?"
        collapsable
      >
        <p>
          No, it's not required, but knowledge equivalent to a Computer Science
          degree would be very helpful.
        </p>
      </ItemWithTitle>
      <ItemWithTitle title="∙ Should beginner developers join?" collapsable>
        <p>
          <span>
            It's entirely up to you. However, we won't be teaching the basics of
            coding. For beginners, we recommend our separate project called{" "}
            <a
              className="text-lime-500 font-normal"
              href="https://codeftw.dev"
              target="_blank"
              rel="noreferrer"
            >
              CodeFTW.dev
            </a>
            . It's completely free, but most of the content is in Portuguese.
          </span>
        </p>
      </ItemWithTitle>
      <ItemWithTitle title="∙ Why buy now?" collapsable>
        <p>
          You are free to buy whenever you want. You are also free not to buy :)
        </p>
        <p>
          The benefit of buying right now is the 50% discount. It will be gone
          once we have multiple courses published.
        </p>
      </ItemWithTitle>
      <ItemWithTitle title="∙ Are the live group calls recorded?" collapsable>
        <p>Yes, they are. So if you can't join you can watch it later.</p>
        <p>
          Also, you can send questions in advance so we can answer your
          questions even if you can't join.
        </p>
      </ItemWithTitle>
      <ItemWithTitle
        title="∙ How many hours a week of live interaction?"
        collapsable
      >
        <p>
          Expect at least one hour a week, but we anticipate that will be more.
        </p>
        <p>The schedule will be adjusted according to members availability.</p>
      </ItemWithTitle>
      <ItemWithTitle
        title="∙ Is client work done inside this program?"
        collapsable
      >
        <p>
          No, absolutely no client work is done here. We don't even provide
          members with access to client code.
        </p>
        <p>
          We will guide you to work on real problems, in real-life situations,
          but not on our client projects. We keep these two things separate.
        </p>
      </ItemWithTitle>

      <ItemWithTitle title="∙ What happens after the payment?" collapsable>
        <p>
          You will get your invite to our Portal with all the content and also
          to our private Discord server.
        </p>
        <p>
          We may also email you to understand your expectations and learn more
          about you.
        </p>
        <p>We aim to maximize the chances of success for both parties.</p>
        <p>
          Typically, a quick exchange of one or two emails is enough, so don't
          worry about this process. In many cases it's not even necessary as you
          will join our Discord and introduce yourself there.
        </p>
        <p>
          If, for any reason, we decide not to proceed, a full refund will be
          issued immediately but this is very rare.
        </p>
      </ItemWithTitle>
      <ItemWithTitle title="∙ Not sure yet?" collapsable>
        <p>
          Don't buy if you are not sure. Email aiproofdev@quave.dev with your
          questions. Be very clear and specific if you want to get an answer.
          Poor writing is a sign of poor thinking. Review your email before
          hitting send.
        </p>
        <p>
          <span>
            Keep in mind that emails can go to Spam as we probably never
            received an email from you. If we don't answer in 24 hours, send a
            DM to Filipe on his{" "}
            <a
              className="text-lime-500 font-normal"
              href="https://twitter.com/FilipeNevola"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            .
          </span>
        </p>
      </ItemWithTitle>
      <ItemWithTitle title="∙ How to receive updates?" collapsable>
        <p>
          If you are a paid member you will get the news on our private Discord.
        </p>
        <p>
          <span>
            If you are not a paid member but want to keep getting news:{" "}
            <a
              className="text-lime-500 font-normal"
              href="https://news.lemeno.io/en/filipe-nevola"
              target="_blank"
              rel="noreferrer"
            >
              Subscribe
            </a>{" "}
            to Filipe's newsletter and follow us at Twitter{" "}
            <a
              className="text-lime-500 font-normal"
              href="https://twitter.com/aiProofDev"
              target="_blank"
              rel="noreferrer"
            >
              @AIProofDev
            </a>
            .
          </span>
        </p>
      </ItemWithTitle>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow gap-4">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0">
        More links
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          -{" "}
          <Link className="text-lime-500 font-normal" to={RoutePaths.ABOUT}>
            About
          </Link>
        </p>
        <p>
          -{" "}
          <Link className="text-lime-500 font-normal" to={RoutePaths.CONTENT}>
            Content
          </Link>
        </p>
        <p>
          -{" "}
          <Link
            className="text-lime-500 font-normal"
            to={RoutePaths.TERMS_OF_USE}
          >
            Terms of Use
          </Link>
        </p>
      </h2>
    </div>

    <div className="flex w-full flex-col justify-between mt-3 grow">
      <h3 className="text-tertiary text-2xl gap-4 flex-col flex md:ml-0 mb-4">
        Still here?
      </h3>
      <h2 className="text-lg text-tertiary md:text-xl gap-2 flex-col flex md:ml-0 font-light">
        <p>
          Check our{" "}
          <Link className="text-lime-500 font-normal" to={RoutePaths.CONTENT}>
            Content
          </Link>
          . Especially the second list.
        </p>
        <p>
          Follow our Twitter{" "}
          <a
            className="text-lime-500 font-normal"
            href="https://twitter.com/aiproofdev"
            target="_blank"
            rel="noreferrer"
          >
            @AIProofDev
          </a>
          .
        </p>
      </h2>
    </div>
  </div>
);
