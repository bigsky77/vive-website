import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import photo17 from "../public/photo17.jpg"
import photo27 from "../public/photo27.jpg"
import photo39 from "../public/photo39.jpg"
import photo40 from "../public/photo40.jpg"
import photo41 from "../public/photo41.jpg"
import photo42 from "../public/photo42.png"
import snakecity from "../public/snakecity.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>software</a>
        </h1>
    
        <Image src={photo42} height={600} width={600}/>
        <div className={styles.grid}>
          <Link href="https://github.com/bigsky77/hyperion">
           <b className={styles.card}>
           <p>hyperion</p>
          </b>
          </Link>
         
         <Link href="https://github.com/bigsky77/tempest">
          <b className={styles.card}>
            <p>tempest</p>
          </b>
         </Link>

          <Link href="https://github.com/bigsky77/dark_star">
          <b className={styles.card}>
            <p>darkstar</p>
          </b>
         </Link>
         </div>

         <div className={styles.grid}>
          <Link href="https://github.com/bigsky77/joy-game">
          <b className={styles.card}>
            <p>joy-game</p>
          </b>
          </Link>
          
          <Link href="https://github.com/bigsky77/ajax">
          <b className={styles.card}>
            <p>ajax</p>
          </b>
          </Link>

         </div>

      </main>
    </div>
  )
}
