import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import jmt from "../public/jmt.jpg"
import computer from "../public/computer.jpg"
import photo29 from "../public/photo29.jpg"
import photo35 from "../public/photo35.jpg"
import Header from "../public/header.js"
import Notes from "./notes.js"
import Writing from "./writing.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BigSky</title>
        <meta name="description" content="" />
        <link rel="icon" href="./public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>BigSky</a>
        </h1>

        <p className={styles.description}>
          cairo, virtual machines, rust 
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/bigsky77" className={styles.card}>
            <Image src={photo35} height={700}
         width={500}/>
          <p>dev</p>
          </a>
         
         <Link href="/writing">
          <a className={styles.card}>
            <Header/>
            <p>writing</p>
          </a>
         </Link>

          <a href="https://twitter.com/BigSky_7" className={styles.card}>
            <Image src={photo29} height={700}
         width={500}/>
            <p>social</p>
          </a>

         </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
