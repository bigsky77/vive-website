import styles from '../styles/Home.module.css'

const Deck = () => {

  return(
    <div className={styles.container}>
    <div className={styles.presentation}> <iframe border="2px solid #CD955C" width="790" height="540" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FKpRB5yXmWyeb7KQkjBkmWG%2FUntitled%3Fnode-id%3D3%253A13%26scaling%3Dcontain%26page-id%3D0%253A1" allowfullscreen></iframe>
    </div>
      <footer className={styles.footer}>
          <a>designed in 🇮🇱, 🇨🇴 and 🇺🇸</a>      
    </footer>
    </div>
  )
}

export default Deck
