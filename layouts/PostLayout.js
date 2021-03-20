import { MyLink } from '../components/myLink'
import { PageTitle } from '../components/PageTitle'
import { SectionContainer } from '../components/SectionContainer'
import { RichText } from 'prismic-reactjs'
import { Date } from 'prismic-reactjs';
import { format } from 'date-fns';
// import Image from 'next/image' 
// import { Tag } from '../components/tag'

// sanityでコメント欄を作る予定のため保留
// const twitterUrl = (fileName) => `${siteMetdata.siteRepo}/blob/master/data/blog/${fileName}`
// const discussUrl = (slug) =>
//   `https://mobile.twitter.com/search?q=${encodeURIComponent(
//     `${siteMetdata.siteUrl}/posts/${slug}`
//   )}`

export function PostLayout(props) {
  const pdate = Date(props.p_date);
  const formattedDate = format(pdate,'MMMM dd, yyyy');
  return (
    <SectionContainer>
      {/* <BlogSeo url={`${siteMetdata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} /> */}
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    {props.p_date && <div>{formattedDate}</div>}
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{props.p_title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            {/* <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
              <dt className="sr-only"></dt>
              <dd>
                <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                  <li className="flex items-center space-x-2">
                    <img src={siteMetdata.image} alt="avatar" className="w-10 h-10 rounded-full" />
                    <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 dark:text-gray-100">{siteMetdata.author}</dd>
                      <dt className="sr-only">Twitter</dt>
                      <dd>
                        <MyLink
                          href={siteMetdata.twitter}
                          className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {siteMetdata.twitter.replace('https://twitter.com/', '@')}
                        </MyLink>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </dd>
            </dl> */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
                {RichText.render(props.p_richbody)}
              </div>
            </div>
            <footer>
              <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                {/* {props.p_tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-500 dark:text-gray-400">Tags</h2>
                    <div className="flex flex-wrap">
                      {props.p_tags.map((tag) => (
                        <Tag key={tag} p_tag={tag} />
                      ))}
                    </div>
                  </div>
                )} */}
                {/* {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )} */}
              </div>
              <div className="pt-4 xl:pt-8">
                <MyLink
                  href="/posts"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  &larr; Back to the blog
                </MyLink>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
