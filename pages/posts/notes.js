import styles from '../../styles/Home.module.css'
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Layout from '../../styles/layout'
import Footer from "../footer/footer.js"

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
   <main className={styles.main}>
     <h1 className={styles.title}>
        <a>technology</a>
        </h1>
         <div className={styles.bloglist}>
           <ul>
            {allPostsData.map(({ id, date, title }, index) => (
               <li key={index} className={styles.list}>
                  <a className={styles.date}>{date}</a>
                  <br/>
                    <Link href={`${id}`}>
                      <a className={styles.description}>{title}</a>
                    </Link>
                  <br/>
                  <span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </main>
       <Footer/>
    </div>
  );
}
