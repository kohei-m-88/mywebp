import { Header } from "../components/header";
import { PreviewMode } from "../components/previewMode"
import { BlogPost } from "../components/blogPost";
import { Footer } from "../components/footer";
import { getFiveBlogPosts } from "../lib/api";
// import styles from "../styles/Home.module.css";

const Index = ({ allPosts, preview }) => {
  return (
    <>
      <Header />
      {preview && <PreviewMode />}

      <p>Latest</p>

      {allPosts.map((post) => {
        return (
          <BlogPost
            p_title={post.node.title}
            p_date={post.node.date}
            p_coverImage={post.node.image.url}
            p_richbody={post.node.richbody}
            p_uid={post.node._meta.uid}
            key={post.node._meta.uid}
          />
        );
      })}

      <Footer />
    </>
  );
};

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getFiveBlogPosts(previewData);
  return {
    props: { 
      preview,
      allPosts
    },
  };
}

export default Index;
