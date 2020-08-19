import React from 'react'
import NewsCard from '../news-card'
import './news-list.scss'

function NewsList({ articles, activeArticle }) {
	return (
		<div className='news-list-container'>
			{
				articles.map((article, index) => <NewsCard key={index} activeArticle={activeArticle} index={index} article={article}/>)
			}
		</div>
	)
}

export default NewsList
