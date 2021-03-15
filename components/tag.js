import Link from 'next/link'

export const Tag = ({ props }) => {
  return (
    <Link href={`/tags/${props.p_tag}`}>
      <a className="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400">
        {props.p_tag}
      </a>
    </Link>
  )
}
