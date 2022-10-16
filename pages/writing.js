import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import photo36 from "../public/photo36.jpg"
import photo38 from "../public/photo38.jpg"
import Header from "../public/header.js"
import Notes from "./notes.js"

const ref = 'refrences';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BigSky</title>
        <meta name="description" content="" />
        <link rel="icon" href="./public/mountain.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>writing</a>
        </h1>

        <p className={styles.description}>
        an offensive and defensive weapon against the enemy
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <Image src={photo38} height={700}
         width={500}/>
          <p>technology</p>
          </a>
         
         <Link href={`./posts/${ref}`}>
          <a href='posts/${ref}' className={styles.card}>
            <Image src={photo36} height={700}
         width={500}/>
            <p>refrences</p>
          </a>
         </Link>

         </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
