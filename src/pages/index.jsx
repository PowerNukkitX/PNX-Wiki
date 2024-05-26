import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Wave from '../components/common/wave';
import HomepageMod_Hero from '../components/Hero';

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="PowerNukkitX Wiki">
            <HomepageMod_Hero/>
            <Wave/>
        </Layout>
    );
}
