import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import photo29 from "../public/photo29.jpg"
import photo5 from "../public/photo5.jpg"
import photo3 from "../public/photo3.jpg"
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
         "The trees that grow in my own country 
         <br></br>
         Are the beech tree and the yew;
         <br></br>
         Many stand together
         <br></br>
         And some stand few."
        </p>

        <div className={styles.grid}>
          <a href="/notes" className={styles.card}>
            <Image src={photo3} height={500}
         width={500}/>
          <p>technology</p>
          </a>
         
         <Link href={`./posts/${ref}`}>
          <a href='posts/${ref}' className={styles.card}>
            <Image src={photo5} height={500}
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
