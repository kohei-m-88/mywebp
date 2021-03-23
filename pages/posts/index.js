import { PageSeo } from '../../components/seo'
import siteMetadata from '../../data/siteMetadata'
import { BlogPost } from '../../components/blogPost'
import { getAllBlogPosts } from '../../lib/api'

export const Index = ({ allPosts, preview }) => {
  return (
    <>
      <PageSeo
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/posts`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Posts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Recent blog posts</p>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!allPosts.length && 'No posts found.'}
          {allPosts.map((post) => {
            return (
              <BlogPost
                p_title={post.node.title}
                p_date={post.node.date}
                p_summary={post.node.summary}
                p_uid={post.node._meta.uid}
                p_tags={post.node._meta.tags}
                key={post.node._meta.uid}
              />
            )
          })}
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllBlogPosts(previewData)
  return {
    props: {
      preview,
      allPosts,
    },
  }
}

export default Index
