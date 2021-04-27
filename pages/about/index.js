import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: About Me</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>About me</h2>
        <ul className={utilStyles.listStandard}>
          <li className={utilStyles.listItemStandard}>
            <strong>2000:</strong> Taught myself to write HTML and CSS so I
            could build geocities sites about my virtual ‘dogz’ 🐶
          </li>
          <li className={utilStyles.listItemStandard}>
            <strong>February 2018:</strong> Finally realised I could learn how
            to code for real, quit my candy making career and started a 12 week
            web development bootcamp at{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://generalassemb.ly/"
            >
              General Assembly
            </a>{" "}
            🍬
          </li>
          <li className={utilStyles.listItemStandard}>
            <strong>June 2018:</strong> Started as a Junior Front-End Web
            Developer at{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://www.finder.com.au/"
            >
              Finder
            </a>{" "}
            👩🏻‍💻
          </li>
          <li className={utilStyles.listItemStandard}>
            <strong>September 2019:</strong> Promoted to Engineer 🎉
          </li>
          <li className={utilStyles.listItemStandard}>
            <strong>August 2020:</strong> Joined the Editor Fundamentals team at{" "}
            <a
              className={utilStyles.linkFeature}
              href="https://www.atlassian.com/"
            >
              Atlassian
            </a>{" "}
            🥳
          </li>
        </ul>
      </section>
      <section className={utilStyles.imageWrapper}>
        <img
          src="/images/taryndesk.jpg"
          className={utilStyles.imageHalf}
          alt="Taryn sitting in her home office"
        />
        <img
          src="/images/speaking-thanks.jpg"
          className={utilStyles.imageHalf}
          alt="Taryn speaking at SydCSS"
        />
      </section>
      <section>
        <h3 className={utilStyles.h3}>Things I’ve worked on</h3>
        <h4>Atlassian</h4>
        <ul className={utilStyles.listStandard}>
          <li className={utilStyles.listItemStandard}>
            Currently feature leading a project coming soon!
          </li>
          <li className={utilStyles.listItemStandard}>
            Cypress tests for editor functionality to allow manual testing time
            to be spent on more complex scenarios
          </li>
          <li className={utilStyles.listItemStandard}>
            <a href="https://community.atlassian.com/t5/Confluence-Cloud-articles/Solving-WTF-moments-in-Confluence-Improvements-to-lists-have/ba-p/1601228">
              Improvements to lists in the cloud editor
            </a>
          </li>
        </ul>
        <h4>Finder</h4>
        <ul className={utilStyles.listStandard}>
          <li className={utilStyles.listItemStandard}>
            Design Ops: as a team we refreshed the navigation, page templates,
            side bar and more, giving the whole site a fresh new look and
            improved user experience. The page templates we created and rolled
            out across the site reduced bounce rate by ~25%.
          </li>
          <li className={utilStyles.listItemStandard}>
            Gutenberg CMS: building ‘blocks’ (components) for the new WordPress
            editor, using a hybrid renderer that renders Wordpress content in a
            Next.JS front-end.
          </li>
          <li className={utilStyles.listItemStandard}>
            Engineering diversity working group.
          </li>
          <li className={utilStyles.listItemStandard}>
            <a
              className={utilStyles.linkFeature}
              href="https://medium.com/finder-tech"
            >
              Finder Tech Blog.
            </a>
          </li>
          <li className={utilStyles.listItemStandard}>
            Web accessibility learning breaks.
          </li>
          <li className={utilStyles.listItemStandard}>
            Helped propose and implement web accessibility standards.
          </li>
        </ul>
      </section>
      <section className={utilStyles.imageWrapper}>
        <img
          src="/images/taryn-lexi-desk1.jpg"
          className={utilStyles.imageHalf}
          alt="Taryn at her desk with her big fluffy dog begging for treats"
        />
        <img
          src="/images/taryn-lexi-desk2.jpg"
          className={utilStyles.imageHalf}
          alt="Taryn at her desk giving her big fluffy dog a treat"
        />
      </section>
      <section>
        <h3 className={utilStyles.h3}>When I'm not at a computer</h3>
        <p>
          You'll usually find me going on walks with{" "}
          <a
            className={utilStyles.linkFeature}
            href="https://www.instagram.com/lexi.samoyed"
          >
            Lexi the Samoyed dog
          </a>
          , exploring our local area and Sydney beaches. 🐶
        </p>
        <p>
          Alternatively I'll be juggling my many hobbies such as{" "}
          <Link href="/reading">
            <a className={utilStyles.linkFeature}>reading</a>
          </Link>
          , collecting more indoor plants than necessary, learning Solo Jazz
          dancing, attempting to crochet things, very occasionally baking, etc!
        </p>
      </section>
    </Layout>
  );
}
