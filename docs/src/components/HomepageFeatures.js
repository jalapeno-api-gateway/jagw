import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Cloud-Native',
    image: '/img/kubernetes.svg',
    link: 'docs/installation',
    description: (
      <>
        The Jalapeño API Gateway was designed from the ground up to be a light-weight cloud-native application stack.
      </>
    ),
  },
  {
    title: 'Request Data',
    image: '/img/request-service-logo.svg',
    link: 'docs/api/request-service',
    description: (
      <>
        The Jalapeño API Gateway allows you to make simple API requests via gRPC to fetch both topology and telemetry data from Jalapeño.
      </>
    ),
  },
  {
    title: 'Subscribe To Data',
    image: '/img/subscription-service-logo.svg',
    link: 'docs/api/subscription-service',
    description: (
      <>
        The Jalapeño API Gateway allows you to subscribe to specific collections and counters. The Gateway will inform you via gRPC on changes in the network.
      </>
    ),
  },
];

function Feature({image, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <img src={useBaseUrl(image)} className={styles.featureImage} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <h3>{title}</h3>
        </a>
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
