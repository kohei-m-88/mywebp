import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { Tag } from "./tag";

export const BlogPost = (props) => {
  return (
    <>
      <li className="py-12">
        <article>
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={props.p_date}>
                  {
                    new Date(props.p_date)
                    // .toLocaleDateString(siteMetadata.locale, postDateTemplate)
                  }
                </time>
              </dd>
            </dl>

            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={`/posts/${props.p_uid}`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {RichText.asText(props.p_title)}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap">
                    {props.p_tags.map((p_tag) => (
                      <Tag key={p_tag} p_tag={p_tag} />
                    ))}
                  </div>
                </div>
                <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                  {RichText.asText(props.p_richbody)}
                </div>
              </div>
              <div className="text-base font-medium leading-6">
                <Link
                  href={`/posts/${props.p_uid}`}
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={`Read "${RichText.asText(props.p_title)}"`}
                >
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </div>
        </article>
      </li>
    </>
  );
};
