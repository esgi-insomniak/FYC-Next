import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  type PostType = {
    id: number;
    title: string;
    date: string;
    content: string;
  };

  const [post, setPost] = useState<PostType>();

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch(() => { });
  }, [id]);

  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{post?.title}</h1>
        <div className={utilStyles.lightText}>
          {post?.date && new Date(post.date).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          })}
        </div>
        <div dangerouslySetInnerHTML={{ __html: post?.content as string }} />
      </article>
    </Layout>
  );
}