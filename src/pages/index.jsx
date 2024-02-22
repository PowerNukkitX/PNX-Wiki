import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Wave from '../components/common/wave';
import HomepageMod_Hero from '@site/src/components/Homepage-modules/Hero';
import HomepageMod_PNX_Features from '@site/src/components/Homepage-modules/PNX-Features';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="PowerNukkitX Wiki">
      <HomepageMod_Hero />
      <Wave />
      <main>
        <HomepageMod_PNX_Features />
      </main>
    </Layout>
  );
}
