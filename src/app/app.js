import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import './app.scss';
import NewsList from '../components/news-list';
import Instructions from '../components/instructions';
import wordsToNumbers from 'words-to-numbers'

const alanAiKey = 'd9ff40805c2cec9fa6c6b90e054f85a02e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {
  const [newsArticales, setNewArticles] = useState([])
  const [activeArticle, setActiveArticle] = useState(-1)
  useEffect(() => {
    alanBtn({
      key: alanAiKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewArticles(articles)
          setActiveArticle(-1)
        } else if (command === 'highlight') {
          setActiveArticle(prevActiveArticle=> prevActiveArticle + 1)
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number
          const article = articles[parsedNumber - 1]
          if (parsedNumber > 20 ) {
            alanBtn().playText('Please try that again')
          } else if (article) {
            alanBtn().playText('Opening ...')
            window.open(article.url, '_blank')
          }
           
        }
      }
    })
  }, [])

  if (!newsArticales.length) {
    return <Instructions />
  }
  
  return (
    <div className="app">
      <NewsList articles={newsArticales} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
