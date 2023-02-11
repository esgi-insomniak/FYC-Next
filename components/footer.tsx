import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/footer.module.css';

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.footer}>
                <div>
                    <Link href="/">
                        <Image src="/profile.jpg" alt="Logo" width={100} height={100} />
                    </Link>
                </div>
                <div className={styles.footer__menu}>
                    <Link href="/posts/">
                        <a>Nos Post</a>
                    </Link>
                    <Link href="/about">
                        <a>A propos</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}