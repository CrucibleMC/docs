import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx(styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout
          title={`${siteConfig.title}`}
          description="Crucible collection of documentation & knowledge">
        <HomepageHeader />
        <main>
          <div className={styles.buttons} style={{paddingBottom: "40px"}}>
            <Link
                className="button button--secondary button--lg"
                to="/docs/crucible/intro">
              Crucible Documentation️
            </Link>
          </div>
          <div className={styles.buttons} style={{paddingBottom: "40px"}}>
            <Link
                className="button button--secondary button--lg"
                to="/docs/modding/intro">
              Modding Documentation & Guides
            </Link>
          </div>
        </main>
      </Layout>
  );
}

