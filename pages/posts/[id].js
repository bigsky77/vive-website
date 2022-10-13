import Layout from '../../styles/layout'
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
      <div className={styles.main}>
      <div className={styles.blog}>
        <h1 className={styles.title}>
         <b>{postData.title}</b>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
     </div>
    </div>
  );
}
