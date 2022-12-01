import { Analytics } from '@vercel/analytics/react';
import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return 
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
}
