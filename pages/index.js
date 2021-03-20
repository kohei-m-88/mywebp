// import { PreviewMode } from "../components/previewMode";
import { BlogPost } from '../components/blogPost'
import { getFiveBlogPosts } from '../lib/api'
// import styles from "../styles/Home.module.css";

const Index = ({ allPosts, preview }) => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
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
                p_coverImage={post.node.image.url}
                p_richbody={post.node.richbody}
                p_uid={post.node._meta.uid}
                p_tags={post.node._meta.tags}
                key={post.node._meta.uid}
              />
            )
          })}
        </ul>
        {allPosts.length > 5 && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/posts"
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getFiveBlogPosts(previewData)
  return {
    props: {
      preview,
      allPosts,
    },
  }
}

export default Index
