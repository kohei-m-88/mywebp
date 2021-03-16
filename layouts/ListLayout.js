import { MyLink } from '../components/myLink'
import { Tag } from '../components/Tag'
import { useState } from 'react'
import { RichText } from 'prismic-reactjs'

export function ListLayout(props) {
  const [searchValue, setSearchValue] = useState('')
  const result = props.p_posts.map((posts) => {
    posts.filter((post) => {
      let searchContent = RichText.asText(frontMatter.node.title) +
      RichText.asText(frontMatter.node.richbody) +
      frontMatter.node._meta.tags.join(' ')
      
    })
  })
  const result = () => {props.p_posts.filter((frontMatter) => {
    const searchContent =
      RichText.asText(frontMatter.node.title) +
      RichText.asText(frontMatter.node.richbody) +
      frontMatter.node._meta.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <>
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {props.p_heading}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {filteredBlogPosts.map((frontMatter) => {
            const { uid, date, title, richbody, tags } = frontMatter
            return (
              <li key={uid + title} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <div>
                        {date}
                      </div>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <MyLink href={`/blog/${uid}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </MyLink>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags ? tags.map((tag) => <Tag key={tag} text={tag} />) : <></>}
                      </div>
                    </div>
                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                      {richbody}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
