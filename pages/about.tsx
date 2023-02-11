// make an about page
import React from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import { siteTitle } from '../components/layout';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>A propos</h1>
            <p>Bonjour, je suis Raphaël Bessonnier, l'un des créateur de ce cours. Je suis aussi alternant chez Adhara France en tant que développeur fullstack et étudiant en 5ème année à l'ESGI.</p>
        </Layout>
    );
}