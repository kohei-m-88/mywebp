import { MyLink } from './myLink'
import { Date } from 'prismic-reactjs'
import { format } from 'date-fns'
// import { Tag } from "./tag";

export const BlogPost = (props) => {
  const date = Date(props.p_date)
  const formattedDate = format(date, 'yyyy-MM-dd')
  return (
    <>
      <li className="py-12">
        <article>
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <div>{formattedDate}</div>
              </dd>
            </dl>

            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <MyLink
                      href={`/posts/${props.p_uid}`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {props.p_title}
                    </MyLink>
                  </h2>

                  <div className="flex flex-wrap">
                    {props.p_tags &&
                      props.p_tags.map((p_tag) => (
                        <div
                          key={p_tag}
                          className="mr-3 text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {p_tag}
                        </div>
                        // tagページを作ったら、div→a(というかtagコンポーネント)にする
                      ))}
                  </div>
                </div>
                <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                  {props.p_summary}
                </div>
              </div>
              <div className="text-base font-medium leading-6">
                <MyLink
                  href={`/posts/${props.p_uid}`}
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={`Read "${props.p_title}"`}
                  key={props.p_uid}
                >
                  Read more &rarr;
                </MyLink>
              </div>
            </div>
          </div>
        </article>
      </li>
    </>
  )
}
