import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { StrictMode, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Space from "../../public/space.jpg";
import GoldenGoose from "../../public/goldengoose.jpg";
import React from 'react'
import ConnectWallet from '../web3/wallet.js'

const Gallery = () => {


  return(
    <div className={styles.container}>
      <main className={styles.main}>
      <ConnectWallet/> 
        <div className={styles.grid}>
          <Image src={Space} height={400} width={200}/>
          <Image src={GoldenGoose} height={400} width={300}/>
          <Image src={Space} height={400} width={200}/>
        </div>  
      </main>
    </div>
  );

}

export default Gallery
