import React from 'react'
import Articles from '../components/articles'
import Layout from '../components/layout'
import { getArticles, getCategories } from '../lib/api'
import KyberWidget from '../components/KyberWidget'

const Home = ({ articles, categories }) => {
  return (
    <Layout categories={categories}>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Articles articles={articles} />
          
          <KyberWidget></KyberWidget>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const articles = (await getArticles()) || []
  const categories = (await getCategories()) || []
  return {
    props: { articles, categories },
    unstable_revalidate: 1,
  }
}

export default Home
