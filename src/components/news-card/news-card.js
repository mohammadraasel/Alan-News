import React, {useEffect, createRef, useState} from 'react'
import './news-card.scss'

const fallbackImage = 'http://www.sra.org.sz/img/news-placeholder.jpg'

function NewsCard({ index, activeArticle, article: { description, publishedAt, source, title, url, urlToImage = fallbackImage } }) {
	const [elementRefs, setElementRefs] = useState([])
	const scrollToRef = (ref)=> window.scroll(0, ref.current.offsetTop - 50)
	useEffect(() => {
		setElementRefs((prevRefs)=>Array(20).fill(0).map((_, i)=> prevRefs[i] || createRef()))
	}, [])
	useEffect(() => {
		if (index === activeArticle && elementRefs[index]) {
			scrollToRef(elementRefs[index])
		}
	}, [index, activeArticle, elementRefs])
	return (
		<div ref={elementRefs[index]} className={`news-card-container ${activeArticle === index ? 'active': ''}`}>
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
