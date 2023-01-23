import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Custom404() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Roshan Taneja</title>
                <meta name="description" content="can i puts my bawls in yo jaws" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Looks like you're a little lost.</h1>
                <a className={styles.description}>click <a href="/">here</a> to head back to the main page!</a>
            </main>
        </div>

    )
}