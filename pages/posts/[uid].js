import { useRouter } from "next/router"
import { Loading } from '../../components/loading';
import { getAllBlogPaths } from "../../lib/api";
import { getBlogPost } from "../../lib/api";
import { PostLayout } from "../../layouts/PostLayout";


export const Post = ({ blogPost, preview }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <>
    <PostLayout
      p_title={blogPost.title}
      p_date={blogPost.date}
      p_tags={blogPost._meta.tags}
      p_slug={blogPost._meta.uid}
      p_fitstPub={blogPost._meta.firstPublicationDate}
      p_lastPub={blogPost._meta.lastPublicationDate}
      p_summary={blogPost.summary}
      p_richbody={blogPost.richbody}
      // p_images={blogPost.リッチボディからとりたい}
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
