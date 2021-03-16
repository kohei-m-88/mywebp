import { useRouter } from "next/router"
import { Loading } from '../../components/loading';
import { BlogPost } from "../../components/blogPost";
import { getAllBlogPaths } from "../../lib/api";
import { getBlogPost } from "../../lib/api";

export const Post = ({ blogPost, preview }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <>
      <BlogPost
        p_title={blogPost.title}
        p_date={blogPost.date}
        p_coverImage={blogPost.image.url}
        p_richbody={blogPost.richbody}
      />
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
