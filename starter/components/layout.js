import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
)

export default Layout
