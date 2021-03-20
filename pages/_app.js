import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { PreviewMode } from '../components/previewMode'
import { LayoutWrapper } from '../components/layoutWrapper'

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
