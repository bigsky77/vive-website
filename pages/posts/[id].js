import Layout from '../../styles/layout'
import Footer from "../footer/footer.js"
import { getAllPostIds, getPostData } from "../../lib/posts";
import styles from '../../styles/Home.module.css'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div className={styles.container}>
      <div className={styles.blog}>
        <h1 className={styles.title} style={{lineHeight: '0.1'}}>
         <b>{postData.title}</b>
         <br></br>
         <b>===============================</b>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <Footer/>
    </div>
  );
}
