import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/cup-straw.svg').default,
    description: (
      <>
        uuidgen.dev is designed to be a super simple interface to generate UUID's at web-scale! Sit back, relax and let
        us handle it.
      </>
    ),
  },
  {
    title: 'Open-source',
    Svg: require('@site/static/img/code-square.svg').default,
    description: (
      <>
        Interested in what is under the hood? Or want to contribute? The code is 100% open-source and available on
        GitHub.
      </>
    ),
  },
  {
    title: 'Powered by Cloudflare Workers',
    Svg: require('@site/static/img/lightning-charge.svg').default,
    description: <>Built using Cloudflare Workers, uuidgen.dev is deployed in over 200+ cities around the globe! 🌎</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
