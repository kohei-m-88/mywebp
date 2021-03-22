import 'tailwindcss/tailwind.css'
import { PreviewMode } from '../components/previewMode'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../components/seo'
import Head from 'next/head'
import { LayoutWrapper } from '../components/layoutWrapper'

export default function MyApp({ Component, pageProps, preview }) {
  return (
    <>
      {preview && <PreviewMode />}
      <ThemeProvider attribute="class">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </>
  )
}
