import { MyLink } from './myLink'
import siteMetadata from '../data/siteMetadata'
import { SocialIcon } from './socialIcons'

export const MyFooter = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>

        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <MyLink href="/">matsudakohei.com</MyLink>
        </div>

        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <MyLink href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </MyLink>
        </div>
      </div>
    </>
  )
}
