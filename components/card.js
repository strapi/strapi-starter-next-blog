import React from 'react'
import Link from 'next/link'

const Card = ({ article }) => {
  const imageUrl = 'http://media.idownloadblog.com/wp-content/uploads/2017/11/trueimagination-iPhone-X-wallpaper-by-Solefield.jpg'
  return (
    <Link as={`/article/${article.id}`} href="/article/[id]">
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <img
              src={imageUrl}
              alt={article.image.alternativeText}
              height="100"
            />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
