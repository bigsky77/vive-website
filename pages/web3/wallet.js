import {ethers} from 'ethers'
import styles from '../../styles/Home.module.css'
import { StrictMode, useRef, useEffect, useState } from "react";

const ConnectWallet = () => {
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

  return(
    <div>
      <button className={styles.connect} style={{fontSize: '1rem', backgroundColor: '#141e24'}} onClick={connectMetamask}>
          connect wallet
      </button>
    </div>
  ); 


}

export default ConnectWallet
