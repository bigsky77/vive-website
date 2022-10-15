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
          <b href="https://github.com/bigsky77/hyperion" className={styles.card}>
          <p>hyperion</p>
          </b>
         
         <Link href="https://github.com/bigsky77/tempest">
          <b className={styles.card}>
            <p>tempest</p>
          </b>
         </Link>

          <b href="https://github.com/bigsky77/dark_star" className={styles.card}>
            <p>darkstar</p>
          </b>
         </div>

         <div className={styles.grid}>
          <b href="https://github.com/bigsky77/joy-game" className={styles.card}>
            <p>joy-game</p>
          </b>
          
          <b href="https://github.com/bigsky77/ajax" className={styles.card}>
            <p>ajax</p>
          </b>
         </div>

      </main>
    </div>
  )
}
