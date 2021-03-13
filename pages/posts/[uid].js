import { Header } from "../../components/header";
import { BlogPost } from "../../components/blogPost";
import { Footer } from "../../components/footer";
import { getAllBlogPaths } from "../../lib/api";
import { getBlogPost } from "../../lib/api";

export const Post = ({ blogPost }) => {
  return (
    <>
      <Header />
      <BlogPost
        p_title={blogPost.title}
        p_date={blogPost.date}
        p_coverImage={blogPost.image.url}
        p_richbody={blogPost.richbody}
      />
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const allPaths = await getAllBlogPaths();
  const bPaths = allPaths.map((bPath) => ({
    params: { uid: bPath.node._meta.uid },
  }));
  return {
    paths: bPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogPost = await getBlogPost(params.uid);
  return {
    props: { blogPost },
  };
}

export default Post;
