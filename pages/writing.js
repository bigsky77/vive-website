import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import photo36 from "../public/photo36.jpg"
import photo38 from "../public/photo38.jpg"
import Header from "../public/header.js"
import Notes from "./notes.js"
import JMT from "../public/jmt.jpg"

const ref = 'reference';

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
        <b>an offensive and defensive 
        <br></br>
        weapon against the enemy</b>
        </p>

        <div className={styles.grid}>
        
        <Link href='/notes'>
        <a className={styles.card}>
            <Image src={photo38} height={300}
         width={200}/>
          <p>writing</p>
          </a>
        </Link>     
       
        <Link href={`./posts/${ref}`}>
          <a href='posts/${ref}' className={styles.card}>
            <Image src={photo36} height={300}
         width={200}/>
            <p>reference</p>
          </a>
         </Link>

         </div>
      </main>

     <footer className={styles.footer}>
        <a>designed in 🇮🇱, 🇨🇴 and 🇺🇸</a>      
      </footer>
    </div>
  )
}
