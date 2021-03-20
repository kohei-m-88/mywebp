import { RichText } from "prismic-reactjs";
import { MyLink } from "./myLink";
// import { Tag } from "./tag";

export const BlogPost = (props) => {
  return (
    <>
      <li className="py-12">
        <article>
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <div>
                  {
                    props.p_date
                    // .toLocaleDateString(siteMetadata.locale, postDateTemplate)
                  }
                </div>
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
                    {props.p_tags && props.p_tags.map((p_tag) => (
                      <a href={p_tag} key={p_tag} className="mr-3 text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">{p_tag}</a>
                      // <Tag key={p_tag} p_tag={p_tag} />
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
  );
};
