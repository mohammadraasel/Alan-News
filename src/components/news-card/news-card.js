import React from 'react'
import './news-card.scss'

const fallbackImage = 'http://www.sra.org.sz/img/news-placeholder.jpg'

function NewsCard({index, article: { description, publishedAt, source, title, url, urlToImage = fallbackImage} }) {
	return (
		<div className='news-card-container'>
			<div className="card-area">
				<div className="card-media">
					<img src={urlToImage} alt=""/>
				</div>
				<div className="contents">
					<div className="info">
						<p className="publish-date">{new Date(publishedAt).toDateString()}</p>
						<h5>{source.name}</h5>
					</div>
					<div className="heading">
						<h2>{title}</h2>
					</div>

					<div className="card-content">
						<p>{description}</p>
					</div>
					<div className="card-action">
						<a rel="noopener noreferrer" target='_blank' href={url}>Read More...</a>
						<h5 href={url}>{index + 1}</h5>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewsCard
