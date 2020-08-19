import React from 'react'
import NewsCard from '../news-card'
import './news-list.scss'

function NewsList({ articles }) {
	return (
		<div className='news-list-container'>
			{
				articles.map((article, index) => <NewsCard key={index} index={index} article={article}/>)
			}
		</div>
	)
}

export default NewsList
