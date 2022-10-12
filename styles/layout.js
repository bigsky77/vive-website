import Link from "next/link";
import styles from '../styles/Home.module.css'

const name = "Writing";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.title}>
        {home ? (
          <>
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
