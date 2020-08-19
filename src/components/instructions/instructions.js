import React from 'react'
import './instructions.scss'
const instructions = [
	{ color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
	{ color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
	{ color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
	{ color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
  ]
function Instructions() {
	return (
		<div className='instructions-container'>
			<div className="app-intro">
				<h3>Alan News</h3>
				<p>Say command And get news</p>
			</div>
			<div className="instruction-container">
				{
					instructions.map(instruction => (
						<div key={instruction.title} className="instruction" style={{backgroundColor: instruction.color +'22', color: instruction.color}}>
							<h2 className="title">{instruction.title}</h2>
							<div className="info">
								{
									instruction.info ? 
										<p>
											<strong>
												{instruction.title.split(' ')[2]}:
											</strong> <br />
											{instruction.info}
										</p>
										: null
								}
							</div>
							<p className='command'>Try saying: <br/><i>{instruction.text}</i></p>
						</div>
					))
				}
			</div>

		</div>
	)
}

export default Instructions
