import { NextSeo, ArticleJsonLd } from 'next-seo'
import siteMetadata from '../data/siteMetadata'

export const SEO = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: 'website',
    locale: siteMetadata.language,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
        alt: siteMetadata.title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: siteMetadata.twitter,
    site: siteMetadata.twitter,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteMetadata.author,
    },
  ],
}

export const PageSeo = ( { props } ) => {
  return (
    <NextSeo
      title={`${props.title} – ${siteMetadata.title}`}
      description={props.description}
      canonical={props.url}
      openGraph={{
        url: props.url,
        titile: props.title,
        description: props.description,
      }}
    />
  )
}

export const BlogSeo = ({ props }) => {
  const publishedAt = new Date(props.firstPub)
  // .toISOString()
  const modifiedAt = new Date(props.lastPub || props.firstPub)
  // .toISOString()
  let imagesArr =
    props.images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof props.images === 'string'
      ? [props.images]
      : props.images

  const featuredImages = imagesArr.map((img) => {
    return {
      url: `${siteMetadata.siteUrl}${img}`,
      alt: props.title,
    }
  })

  return (
    <>
      <NextSeo
        title={`${props.title} – ${siteMetadata.title}`}
        description={props.summary}
        canonical={props.url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            authors: [`${siteMetadata.author}`],
            tags: props.tags,
          },
          url: props.url,
          title: props.title,
          description: props.summary,
          images: featuredImages,
        }}
        additionalMetaTags={[
          {
            name: 'twitter:image',
            content: featuredImages[0].url,
          },
        ]}
      />
      <ArticleJsonLd
        authorName={siteMetadata.author}
        dateModified={modifiedAt}
        datePublished={publishedAt}
        description={props.summary}
        images={featuredImages}
        publisherName={siteMetadata.author}
        title={props.title}
        url={props.url}
      />
    </>
  )
}
