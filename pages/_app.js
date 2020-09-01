import '../styles/global.scss'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { TinaProvider, TinaCMS } from 'tinacms'

function MyApp ({ Component, pageProps }) {
  const cms = new TinaCMS({ enabled: true, sidebar: true })
  return (
    <>
      <TinaProvider cms={cms}>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </TinaProvider>
    </>
  )
}

export default MyApp
