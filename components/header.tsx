// make a header component
import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';

const name = 'Notre blog';
 export default function Header(){
    return (
        <header>
            <div className={styles.header}>
                <div>
                    <Link href="/">
                        <a>{name}</a>
                    </Link>
                </div>
                <div>
                    <Link href="/posts/">
                        <a>Nos Post</a>
                    </Link>
                </div>
                <div>
                <Link href="/about">
                        <a>A propos</a>
                    </Link>
                </div>
            </div>
        </header>
    );
 }