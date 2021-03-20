import Image from 'next/image'
import { MyLink } from './myLink'

export const Card = (props) => (
  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
    <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
      <MyLink href={props.p_href} aria-label={`Link to ${props.p_uid}`}>
        <Image
          alt={props.p_title}
          src={props.p_src}
          className="lg:h-48 md:h-36 object-cover object-center"
          width={544}
          height={549}
          
        />
      </MyLink>

      <div className="p-6">
        <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
          <MyLink href={props.p_href} aria-label={`Link to ${props.p_uid}`}>
            {props.p_title}
          </MyLink>
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{props.p_summary}</p>
        <MyLink
          href={`/posts/${props.p_uid}`}
          className="text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          aria-label={`Link to detail`}
        >
          ブログの記事へ &rarr;
        </MyLink>
      </div>
    </div>
  </div>
)
