import styles from '../styles/Home.module.css'
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Layout from '../styles/layout'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
  <div className={styles.container}>
   <div className={styles.main}>
     <h1 className={styles.title}>
        <b>technology</b>
     </h1>
      <div>
        <ul>
          {allPostsData.map(({ id, date, title }, index) => (
            <li key={index}>
              <Link href={`./posts/${id}`}>
                <a className={styles.description}>{title}</a>
              </Link>
              <br/>
              <span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}
