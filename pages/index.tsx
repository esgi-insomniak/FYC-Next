import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }: { allPostsData: { id: string; date: string; title: string; }[]; }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Bonjour, je suis Raphaël Bessonnier, l'un des créateur de ce cours. Je suis aussi alternant chez Adhara France en tant que développeur fullstack et étudiant en 5ème année à l'ESGI.</p>
        <p>
          Voici un lien de redirection vers notre first-post<br />
          <a href="/posts/first-post">First post</a><br />
          <a href="/posts/second-post">Second post</a>
        </p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}