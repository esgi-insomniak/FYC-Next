import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
    </Layout>
  );
}