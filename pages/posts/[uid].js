import { useRouter } from "next/router"
import { Loading } from '../../components/loading';
import { Header } from "../../components/header";
import { PreviewMode } from "../../components/previewMode"
import { BlogPost } from "../../components/blogPost";
import { Footer } from "../../components/footer";
import { getAllBlogPaths } from "../../lib/api";
import { getBlogPost } from "../../lib/api";

export const Post = ({ blogPost, preview }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <>
      <Header />
      {preview && <PreviewMode />}
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
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const blogPost = await getBlogPost(params.uid, previewData);
  return {
    props: { 
      preview,
      blogPost 
    },
  };
}

export default Post;
