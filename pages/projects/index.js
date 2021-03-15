import { useRouter } from "next/router";
import { Loading } from "../../components/loading";
import { Header } from "../../components/header";
import { PreviewMode } from "../../components/previewMode";
import { ProjectPost } from "../../components/projectPost";
import { getAllProjectPosts } from "../../lib/api";

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
          <ProjectPost
            p_title={post.node.title}
            p_image={post.node.image.url}
            // p_link={post.node.link.url}
            p_richbody={post.node.richbody}
            p_uid={post.node._meta.uid}
            key={post.node._meta.uid}
          />
        );
      })}
    </>
  );
};

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllProjectPosts(previewData);
  return {
    props: {
      preview,
      allPosts,
    },
  };
}

export default Index;
