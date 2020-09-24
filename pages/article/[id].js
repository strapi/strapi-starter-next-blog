import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import { getArticles, getArticle, getCategories } from '../../lib/api'
import Layout from '../../components/layout'
// import { Comment } from 'react-disqus-components';
// import ReactDisqus from 'react-disqus';
import { DiscussionEmbed } from "disqus-react"


const Article = ({ article, categories }) => {
  const imageUrl = 'https://picsum.photos/500/350'

  const disqusConfig = {
    url: 'localhost:3000',
    identifier: '/article/2',
    title: 'hello',
  }

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
      <DiscussionEmbed
        shortname={`election-analysis`}
        config={{
          url: `https://mattcosta7.github.io/presidential_election_analysis/`,
          identifier: `123`,
          title: 'demo',
        }}
      />
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
