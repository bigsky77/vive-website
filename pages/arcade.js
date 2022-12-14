import styles from '../styles/Home.module.css'
import Footer from "./footer/footer.js"
import {ethers} from 'ethers'
import { StrictMode, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Game from "../lib/game/game.js";
import LoadGame from "../lib/game/loadgame.js";
import Player from "../lib/game/player.js";

export default function Home() {  
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

    const [isStart, updateStart] = useState(false);
  
    function start() {
      updateStart(true)
    }

    return (
      <div className={styles.container}>    
          
          <main className={styles.main}>
              <div className={styles.verticalAlign}>
                <button className={styles.connect} style={{fontSize: '1rem', backgroundColor: '#141e24'}} onClick={connectMetamask}>
                  connect wallet
                </button>
              </div>

              <h1 className={styles.title}>
                    <a>spacerz</a>
                  </h1>
              <div className={styles.GameArea}>
              <div className={styles.backgroundImage}>
                <LoadGame/>
              </div>
              </div>
          </main>
        <Footer/>
      </div>
    );
}
