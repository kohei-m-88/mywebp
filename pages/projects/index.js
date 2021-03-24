import { PageSeo } from '../../components/seo'
import siteMetadata from '../../data/siteMetadata'
import { Card } from "../../components/card"
import { getAllProjectPosts } from "../../lib/api";

export const Index = ({ allPosts, preview }) => {
  return (
    <>
    <PageSeo
      title={`Projects - ${siteMetadata.author}`}
      description={siteMetadata.description}
      url={`${siteMetadata.siteUrl}/projects`}
    />
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            創作物
          </h1>

          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            プライベートで作ったものです。（良い文がおもいつかないので保留）
          </p> */}
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {allPosts.map((post) => (
              <Card
                key={post.node._meta.uid}
                p_uid={post.node._meta.uid}
                p_title={post.node.title}
                p_summary={post.node.summary}
                p_src={post.node.image.url}
                p_href={post.node.link.url}
              />
            ))}
          </div>
        </div>
      </div>
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
