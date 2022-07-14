import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Kukuza Wallet',
    image: require('../../static/img/easy.png').default,
    description: (
      <>
        Makes it easy for you to top up your cUSD wallet. Both Add or withdraw cUSD.
      </>
    ),
  },
  {
    title: 'Sargo',
    image: require('../../static/img/community.png').default,
    description: (
      <>
        Sargo is a community, owned by its members.
      </>
    ),
  },
  {
    title: 'Earn',
    image: require('../../static/img/earn.png').default,
    description: (
      <>
        Want to be a community yourself? Fullfill requests and earn commisions. The faster you fulfill, the more you earn.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImg} alt={title} />
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
