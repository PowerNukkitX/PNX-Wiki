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
    Svg: require('@site/static/img/icon/cloud-acceleration.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.high"
        values={{}}>
        {"Experience superior performance with PowerNukkitX. Optimized for efficiency, it ensures smooth gameplay experiences for all players."}
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
    Svg: require('@site/static/img/icon/multiple-defenses.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.moreFeature"
        values={{}}>
        {"PowerNukkitX supports CustomItem, CustomBlock, and CustomEnchantment features for unlimited scalability."}
      </Translate>
    ),
  },
  {
    title: <Translate
      id="homepage.feature.morePlugins"
      description="More plugins"
      values={{}}>
      {"Extensive Plugin Support"}
    </Translate>,
    Svg: require('@site/static/img/icon/flexible-access.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.morePlugins"
        values={{}}>
        {"Customize and expand your server functionalities with a wide range of plugins supported by PowerNukkitX, providing endless possibilities."}
      </Translate>
    ),
  },
  {
    title: <Translate
      id="homepage.feature.vanillaCommand"
      description="Vanilla Commands"
      values={{}}>
      {"Vanilla Commands"}
    </Translate>,
    Svg: require('@site/static/img/icon/availability.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.vanillaCommand"
        values={{}}>
        {"PowerNukkitX supports most vanilla commands and command block, as well as mcfunction files."}
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
    Svg: require('@site/static/img/icon/api-interface.svg').default,
    description: (
      <Translate
        id="homepage.feature.desc.plugin"
        values={{}}>
        {"PowerNukkitX supports plug-ins written in several programming languages, see our WIKI for details!"}
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4',styles.featureItem)}>
      <div className="text--center">
        <Svg className={styles.featureItem_Img} role="img" />
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
        <div className={clsx('row',styles.featureItems)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
