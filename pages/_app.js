import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import { PreviewMode } from '../components/previewMode'
import { LayoutWrapper } from '../components/layoutwrapper'

export default function MyApp({ Component, pageProps, preview }) {
  return (
    <ThemeProvider attribute="class">
      {preview && <PreviewMode />}
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
