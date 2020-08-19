import React from 'react'
import './instructions.scss'

function Instructions() {
	return (
		<div className='instructions-container'>
			<div className="app-intro">
				<h3>Alan News</h3>
				<p>Say command And get news from sources</p>
			</div>
			<div className="instruction-container">
				<div className="instruction">
					<h2 className="title">To Know about App</h2>
					<div className="commands">
						<span>Say: <strong>What does this app do?</strong></span>
					</div>
				</div>
				<div className="instruction">
					<h2 className="title">To get news</h2>
					<div className="commands">
						<span>Say: <strong>Get the news from CNN</strong></span> <br />
						Or
						<br/>
						<span>Say: <strong>Get the news from BBC News</strong></span>
					</div>
				</div>
				<div className="instruction">
					<h2 className="title">To Know about Alan</h2>
					<div className="commands">
						<span>Say: <strong>Who are you?</strong></span>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Instructions
