import styles from '../styles/Home.module.css'
import {ethers} from 'ethers'
import { StrictMode, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Game from "./game/game.js";

export function ConnectWallet() {  
  const [result, showResult] = useState(false);
  
  const connectMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []); 
    const signer = provider.getSigner();
    
    showResult(true)
  }

  const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000; 
    return library;
  };

  return (
    <div>
      <button className={styles.card} onClick={connectMetamask} style={{fontSize: '1.33rem'}}>
          connect wallet 🏆
      { result ? <Result/> : null}
      </button>
    </div>
  )
}

export function Result(){
    <div>
      <Game/>
    </div>
}

export default function Home() {  

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ConnectWallet/>
      <div className={styles.GameArea}> 
        <Game/>
        </div>
      </div>
    </div>
  )
}
