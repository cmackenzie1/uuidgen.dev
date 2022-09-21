import React, { useEffect, useState } from "react";
import clsx from "clsx";
import CodeBlock from "@theme/CodeBlock";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    if (!uuid)
      fetch("https://uuidgen.dev")
        .then((r) => r.text())
        .then((r) => setUuid(r));
  }, [uuid]);

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <CodeBlock language={"text"}>{uuid}</CodeBlock>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Generate unlimited UUIDs online with uuidgen's UUID-as-a-service."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
