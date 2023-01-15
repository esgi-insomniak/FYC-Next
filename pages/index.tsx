import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, getDataFromApi } from '../lib/posts';
import Link from 'next/link';

export default function Home({ allPostsData, dataApi }: { allPostsData: { id: string; date: string; title: string; }[]; dataApi: { id: string; title: string; }[];}) {
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
          <a href="/posts/second-post">Second post</a><br />
          <a href="/posts/third-post">Test de la page 404</a>
        </p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            (title !== '' && title !== undefined ?
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}><a>{title}</a></Link>
              <br />
              <small className={utilStyles.lightText}>
              {new Date(date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                })}
              </small>
            </li>
            : null)
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>API</h2>
        <ul className={utilStyles.list}>
          {dataApi.map(({id, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/dummy/${id}`}><a>{title}</a></Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const dataApi = await getDataFromApi();
  return {
    props: {
      allPostsData,
      dataApi,
    },
  };
}