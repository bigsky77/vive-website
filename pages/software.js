import Head from 'next/head'
import Link from "next/link";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import photo17 from "../public/photo17.jpg"
import photo27 from "../public/photo27.jpg"
import photo39 from "../public/photo39.jpg"
import photo40 from "../public/photo40.jpg"
import photo41 from "../public/photo41.jpg"
import snake from "../public/snake2.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>software</a>
        </h1>

        <Image src={snake} height={100} width={400}/>
        <br></br>
        <div className={styles.grid}>
          <b href="https://github.com/bigsky77/hyperion" className={styles.card}>
            <Image src={photo17} height={700}
         width={500}/>
          <p>hyperion</p>
          <br></br>
          <p>stable coin AMM</p>
          <br></br>
          <p>cairo</p>
          </b>
         
         <Link href="https://github.com/bigsky77/tempest">
          <b className={styles.card}>
             <Image src={photo27} height={700}
         width={500}/>
            <p>tempest</p>
            <br></br>
            <p>AMM</p>
            <br></br>
            <p>cairo</p>
          </b>
         </Link>

          <b href="https://github.com/bigsky77/dark_star" className={styles.card}>
            <Image src={photo39} height={700}
         width={500}/>
            <p>darkstar</p>
            <br></br>
            <p>staking model</p>
            <br></br>
            <p>solidity</p>
          </b>
         </div>

         <div className={styles.grid}>
          <b href="https://github.com/bigsky77/joy-game" className={styles.card}>
            <Image src={photo40} height={700}
         width={500}/>
            <p>joy-game</p>
            <br></br>
            <p>cli adventure game</p>
            <br></br>
            <p>javascript</p>
          </b>
          
          <b href="https://github.com/bigsky77/ajax" className={styles.card}>
            <Image src={photo41} height={700}
         width={500}/>
            <p>ajax</p>
            <br></br>
             <p>starkware adventure game</p>
            <br></br>
            <p>rust and cairo</p>
          </b>
         </div>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
