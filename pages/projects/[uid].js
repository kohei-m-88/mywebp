import { Header } from "../../components/header";
import { ProjectPost } from "../../components/projectPost";
import { Footer } from "../../components/footer";
import { getAllProjectPaths } from "../../lib/api"
import { getProjectPost } from "../../lib/api"

export const Project = ({ projectPost }) => {
  return (
    <>
      <Header />
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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectPost = await getProjectPost(params.uid);
  return {
    props: { projectPost },
  };
}

export default Project