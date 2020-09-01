import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import { getArticles, getArticle, getCategories } from '../../lib/api'
import Layout from '../../components/layout'

const Article = ({ article, categories }) => {
  const imageUrl = 'http://media.idownloadblog.com/wp-content/uploads/2017/11/trueimagination-iPhone-X-wallpaper-by-Solefield.jpg'
  return (
    <Layout categories={categories}>
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article.title}</h1>
      </div>

      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={article.content} />
          <p>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = (await getArticles()) || []
  return {
    paths: articles.map((article) => ({
      params: {
        id: article.id,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const article = (await getArticle(params.id)) || []
  const categories = (await getCategories()) || []
  return {
    props: { article, categories },
    unstable_revalidate: 1,
  }
}

export default Article
