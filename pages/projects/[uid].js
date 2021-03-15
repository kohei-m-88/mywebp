import { useRouter } from "next/router"
import { Loading } from '../../components/loading';
import { Header } from "../../components/header";
import { PreviewMode } from "../../components/previewMode"
import { ProjectPost } from "../../components/projectPost";
import { Footer } from "../../components/footer";
import { getAllProjectPaths } from "../../lib/api"
import { getProjectPost } from "../../lib/api"

export const Project = ({ projectPost, preview }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loading />
  }

  return (
    <>
      <Header />
      {preview && <PreviewMode />}
      <ProjectPost
        p_title={projectPost.title}
        p_date={projectPost.date}
        p_coverImage={projectPost.image.url}
        p_link={projectPost.link.url}
        p_richbody={projectPost.richbody}
      />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const allPaths = await getAllProjectPaths();
  const pPaths = allPaths.map((pPath) => ({
    params: { uid: pPath.node._meta.uid },
  }));
  return {
    paths: pPaths,
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const projectPost = await getProjectPost(params.uid, previewData);
  return {
    props: { projectPost, previewData }
  };
}

export default Project