import { useRouter } from "next/router";
import { Loading } from "../../components/loading";
import { Header } from "../../components/header";
import { PreviewMode } from "../../components/previewMode"
import { BlogPost } from "../../components/blogPost";
import { getAllBlogPosts } from "../../lib/api";

export const Index = ({ allPosts, preview }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      {preview && <PreviewMode />}
      
        {allPosts.map((post) => {
          return (
            <BlogPost
              p_title={post.node.title}
              p_date={post.node.date}
              key={post.node._meta.uid}
            />
          );
        })}
    </>
  );
};

export async function getStaticProps({ preview=false, previewData }) {
  const allPosts = await getAllBlogPosts(previewData);
  return {
    props: { 
      preview,
      allPosts
    },
  };
}

export default Index;
