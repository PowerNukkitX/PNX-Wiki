import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Index from '../components/wave';
import HomepageMod_Hero from '../components/hero';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="PowerNukkitX Wiki">
            <HomepageMod_Hero/>
            <Index/>
        </Layout>
    );
}
