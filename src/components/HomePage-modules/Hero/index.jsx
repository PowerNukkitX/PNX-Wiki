import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={clsx("container", styles.heroBanner_Main)}>
        <Heading as="h1" className={styles.hero_Title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.hero_SubTitle}>
        <Translate id="homepage.tagline">
          {"Feature-rich, highly customizable third-party server software for Minecraft: Bedrock Edition."}
        </Translate>
        </p>
        <div className={styles.hero_Buttons}>
          <Link
            className={clsx("button", "button--secondary", styles.hero_Button)}
            to="/docs"
          >
            <Translate
              id="homepage.hero.button#1"
              description="Homepage Hero Button"
              values={{}}
            >
              {"👋 Let's Go"}
            </Translate>
          </Link>

          <Link
            className={clsx("button button--secondary", styles.hero_Button)}
            to="https://github.com/PowerNukkitX/PowerNukkitX"
          >
            <Translate
              id="homepage.hero.button#2"
              description="Homepage Hero Button"
              values={{}}
            >
              {"🌌 Github"}
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function HomepageModules_Hero() {
  return (
    <div className={styles.features}>
      <HomepageHeader />
    </div>
  );
}
