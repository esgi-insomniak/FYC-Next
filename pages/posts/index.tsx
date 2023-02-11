// make an index page for post who will list all the post
import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Post() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
            <h1>Nos Posts</h1>
                <p>
                    Voici un lien de redirection vers notre first-post<br />
                    <a href="/posts/first-post">First post</a><br />
                    <a href="/posts/second-post">Second post</a>
                </p>
            </section>
        </Layout>
    );
}