import { Header } from "../components/header";
import { BlogPost } from "../components/blogPost";
import { Footer } from "../components/footer";
import { getAllBlogPosts } from "../lib/api";
// import styles from "../styles/Home.module.css";

const Index = ({ allPosts }) => {
  return (
    <>
      <Header />

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

export async function getStaticProps() {
  const allPosts = await getAllBlogPosts();
  return {
    props: { allPosts },
  };
}

export default Index;
