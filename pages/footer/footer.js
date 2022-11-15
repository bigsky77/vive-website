import styles from '../../styles/Home.module.css'
import Link from "next/link";
import React from "react";

const Footer = () => {
   return(
      <div>
        <footer className={styles.footer}>
          <a>
             <Link href="/">
                <p>home&nbsp;&nbsp;</p>
             </Link>
            <Link href="https://github.com/bigsky77">
                <p>software&nbsp;&nbsp;</p>
             </Link>
             <Link href="https://mobile.twitter.com/BigSky_7">
                <p>social&nbsp;&nbsp;</p>
             </Link>
          </a>
        </footer>
      </div>
    )
}

export default Footer
