import Head from 'next/head'
import Nav from './nav'

const Layout = ({ children, categories }) => (
  <>
    <Head>
      <title>Strapi blog</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Staatliches"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
      />
      <link
        rel="stylesheet"
        href="https://widget.kyber.network/v0.8.0/widget.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
    </Head>
    <Nav categories={categories} />
    {children}
  </>
)

export default Layout
