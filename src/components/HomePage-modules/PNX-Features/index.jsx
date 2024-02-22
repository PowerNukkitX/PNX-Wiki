import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate
      id="homepage.feature.high"
      description="high performance"
      values={{}}>
      {"High Performance"}
    </Translate>,
    Svg: require('@site/static/img/icon/high-performance.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.high"
        values={{}}>
        {"High Performance!!!"}
      </Translate>
    ),
  },
  {
    title: <Translate
      id="homepage.feature.moreFeature"
      description="More vanilla features"
      values={{}}>
      {"More features"}
    </Translate>,
    Svg: require('@site/static/img/icon/more-feature.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.moreFeature"
        values={{}}>
        {"More vanilla features!!!"}
      </Translate>
    ),
  },
  {
    title: <Translate
      id="homepage.feature.morePlugins"
      description="More plugins"
      values={{}}>
      {"More plugins"}
    </Translate>,
    Svg: require('@site/static/img/icon/plugin.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.morePlugins"
        values={{}}>
        {"More plugins!!!"}
      </Translate>
    ),
  },
  {
    title: <Translate
      id="homepage.feature.vanillaCommand"
      description="All Vanilla Commands"
      values={{}}>
      {"All Vanilla Commands"}
    </Translate>,
    Svg: require('@site/static/img/icon/command.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.vanillaCommand"
        values={{}}>
        {"All Vanilla Commands!!!"}
      </Translate>
    ),
  },
  {
    title: <Translate
      id="homepage.feature.plugin"
      description="More programming languages"
      values={{}}>
      {"More programming languages"}
    </Translate>,
    Svg: require('@site/static/img/icon/plugin.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.plugin"
        values={{}}>
        {"More programming languages!!!"}
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageMod_PNX_Features() {
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
