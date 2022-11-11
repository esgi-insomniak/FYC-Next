import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post(postData: any) {
  return (
    <Layout>
      {postData.postData.title}
      <br />
      {postData.postData.id}
      <br />
      {postData.postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.postData.contentHtml }} />
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

export async function getStaticProps(params: any) {
  const postData = await getPostData(params.params.id);
  return {
    props: {
      postData,
    },
  };
}