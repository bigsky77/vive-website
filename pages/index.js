import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import photo35 from "../public/photo35.jpg"
import photo42 from "../public/photo42.png"
import photo43 from "../public/photo43.jpg"
import photo3 from "../public/photo3.jpg"
import Header from "../public/header.js"
import Notes from "./notes.js"
import Writing from "./writing.js"
import Gallery from "./gallery/gallery.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BigSky</title>
          <meta name="description" content="" />
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="www.bigsky.gg"/>
          <meta property="og:title" content="Dope Software"/>
          <meta property="og:image" content="./public/photo3.jpg"/>
        <link rel="icon" href="./public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>BigSky</a>
        </h1>

        <p className={styles.description}>
        <b>legendary technology</b>
        <br></br>
        <b>for a limitless future</b>
        </p>

        <div className={styles.grid}>
        
        <Link href="/arcade">
        <a className={styles.card}>
            <Image src={photo35} height={700}
         width={500}/>
          <p>arcade</p>
          </a>
        </Link>
         
         <Link href="/writing">
          <a className={styles.card}>
            <Header/>
            <p>writing</p>
          </a>
         </Link>

              <a href="https://twitter.com/BigSky_7" className={styles.card}>
            <Image src={photo42} height={700}
         width={500}/>
            <p>social</p>
          </a>

        </div>

      <footer className={styles.footer}>
        <a>designed in 🇮🇱, 🇨🇴 and 🇺🇸</a>      
      </footer>
      </main>
    </div>
  )
}
