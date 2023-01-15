import Layout from '../../components/layout';
import { getDataFromApi, getDataAPIWithId } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Dummy({ dummyData }: { dummyData: { title: string; id: string; body: string; }; }) {
    return (
      <Layout>
        <Head>
            <title>{dummyData.title}</title>
            <meta name="description" content={dummyData.body.substring(0, 150)} />
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{dummyData.title}</h1>
            <div>
                {dummyData.body}
            </div>
        </article>
      </Layout>
    );
  }

  export async function getStaticPaths() {
    const data = await getDataFromApi();
    const paths = data.map((post: { id: number; }) => ({
        params: { id: post.id.toString() },
    }));
    return { paths, fallback: false };
  }

  export async function getStaticProps({ params }: { params: { id: string; }; }) {
    console.log(params);
    const dummyData = await getDataAPIWithId(params.id);
    return {
      props: {
        dummyData,
      },
    };
  }