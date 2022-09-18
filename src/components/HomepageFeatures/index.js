import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Better Angular Apps',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We make sure that generated code is of the highest quality. We focus a lot on design and architectural patterns. We also put a lot of effort to make sure that your app is always working, no matter the configuration.
      </>
    ),
  },
  {
    title: 'Faster Developement',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Coding apps in Angular can be challenging, there are so many things to learn in order to get started. Not anymore! We give you easy to use right click interface so you can focus on your app features and we make sure to generate the right code for you.
      </>
    ),
  },
  {
    title: 'Extensible',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your workspace with defined coding standards and design system, you can make it simple or very advanced. There are no limits to your creativity, so use it to configure Lowgular the way you like!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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