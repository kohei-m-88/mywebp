import { ProjectPost } from "../../components/projectPost";
import { getAllProjectPosts } from "../../lib/api"

export const Index = ({ allPosts }) => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export async function getStaticProps() {
  const allPosts = await getAllProjectPosts();
  return {
    props: { allPosts },
  };
}

export default Index;
