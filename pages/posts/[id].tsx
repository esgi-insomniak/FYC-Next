import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }: { postData: { title: string; id: string; date: string; contentHtml: string; }; }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
            <meta name="description" content={postData.contentHtml.substring(0, 150)} />
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                {new Date(postData.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                })}
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }

  export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }: { params: { id: string; }; }) {
    console.log(params);
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }