import { getAllBlogPosts } from '../../lib/api'
import { BlogPost } from '../../components/blogPost'

export const Index = ({ allPosts }) => {
  return(
    <>
      <div>
      {allPosts.map((post) => {
        return (
          <BlogPost
            p_title={post.node.title}
            p_date={post.node.date}
            key={post.node._meta.uid}
          />
        );
      })}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllBlogPosts();
  return {
    props: { allPosts },
  };
}

export default Index;