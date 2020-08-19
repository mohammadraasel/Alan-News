import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import './app.scss';
import NewsList from '../components/news-list';
import Instructions from '../components/instructions';

const alanAiKey = 'd9ff40805c2cec9fa6c6b90e054f85a02e956eca572e1d8b807a3e2338fdd0dc/stage'
const testArticles = [
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'Bad weather impedes Mauritius oil spill clean-up',
    description: 'Rough seas make it too risky to clear the remaining oil from a ship that ran aground on a coral reef.',
    url: 'http://www.bbc.co.uk/news/world-africa-53819112',
    urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/5D3B/production/_113976832_tugaway.jpg',
    publishedAt: '2020-08-18T10:42:16Z',
    content: 'Image copyrightNational Crisis CommitteeImage caption\r\n The front of the ship has been towed from the reef - but oil remains in the back of the vessel\r\nRough seas have made it too risky to remove the… [+2452 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'Coronavirus: Officials grilled over Sydney cruise ship scandal',
    description: 'The Ruby Princess was the source of one of Australia\'s biggest coronavirus clusters.',
    url: 'http://www.bbc.co.uk/news/live/world-53817280',
    urlToImage: 'https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/4.1.3/bbc_news_logo.png',
    publishedAt: '2020-08-18T07:07:24.1765761Z',
    content: 'More than 2,500 passengers on Ruby Princess disembarked in Sydney in MarchImage caption: More than 2,500 passengers on Ruby Princess disembarked in Sydney in March\r\nOn Monday we reported that elected… [+733 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'How Wuhan went from quiet streets to packed pools',
    description: 'Images of crowds at a waterpark festival show how far the city has moved on from its January lockdown.',
    url: 'http://www.bbc.co.uk/news/world-asia-china-53816511',
    urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/7542/production/_113981003_gettyimages-1228074922.jpg',
    publishedAt: '2020-08-18T06:27:56Z',
    content: 'Image copyrightGetty ImagesImage caption\r\n Thousands can be seen packed together at a music festival\r\nThousands of people packed shoulder-to-shoulder with no face masks in sight, frolicking on rubber… [+4312 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'What you missed on day one of virtual convention',
    description: 'Eva Longoria, Megan Rapinoe and Biden\'s singing grandchildren - how Democrats tried to hook the at-home audience.',
    url: 'http://www.bbc.co.uk/news/world-us-canada-53816645',
    urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/155D6/production/_114001578_p08nxqvm.jpg',
    publishedAt: '2020-08-18T06:24:36Z',
    content: null
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'Microsoft puts the entire world in a game',
    description: 'The latest Flight Simulator title promises a near-perfect replica of the entire world.',
    url: 'http://www.bbc.co.uk/news/technology-53811956',
    urlToImage: 'https://ichef.bbci.co.uk/images/ic/400xn/p08nx04y.jpg',
    publishedAt: '2020-08-18T04:52:19.4287798Z',
    content: 'Microsoft has revived its Flight Simulator series after more than a decade, promising gamers a replica of the entire globe to play on.\r\nIt does so using new AI-driven technology - one that needs a co… [+142 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'Ellen DeGeneres Show staff fired over allegations',
    description: 'The departures follow allegations by former staff members of bullying, racism and sexual misconduct.',
    url: 'http://www.bbc.co.uk/news/world-us-canada-53815705',
    urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/CD1C/production/_113980525_hi062946847.jpg',
    publishedAt: '2020-08-18T02:11:07Z',
    content: 'Image copyrightReutersImage caption\r\n Host Ellen DeGeneres has issued an apology to staff over the allegations\r\nThree top producers of the Ellen DeGeneres Show have been fired amid allegations of mis… [+2259 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'Republicans to back Biden in Democratic convention',
    description: 'Monday\'s speakers will include Michelle Obama and disaffected members of Mr Trump\'s party.',
    url: 'http://www.bbc.co.uk/news/election-us-2020-53815566',
    urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/C100/production/_113980494_062934249.jpg',
    publishedAt: '2020-08-18T01:24:32Z',
    content: 'Image copyrightReuters\r\nUS Democrats have kicked off their party convention to politically crown Joe Biden as their White House candidate for November\'s election.\r\nMonday\'s speakers will include form… [+3811 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'Canada finance minister quits amid charity scandal',
    description: 'Finance minister Bill Morneau says he will step down after ethics scandal.',
    url: 'http://www.bbc.co.uk/news/world-us-canada-53815645',
    urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/2A8A/production/_98409801_breaking_news_bigger.png',
    publishedAt: '2020-08-17T23:52:59Z',
    content: 'Canada\'s finance minister has said he will resign after conflict-of-interest allegations involving WE Charity.\r\nBill Morneau has faced pressure to step down after it was revealed he did not repay tra… [+278 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'China defends detention of Uighur model',
    description: 'Merdan Ghappar sent video and texts about life in Xinjiang\'s secretive detention system to his family.',
    url: 'http://www.bbc.co.uk/news/world-asia-china-53809345',
    urlToImage: 'https://ichef.bbci.co.uk/images/ic/1024x576/p08ms4y6.jpg',
    publishedAt: '2020-08-17T23:02:13Z',
    content: 'Media captionThe video Uighur model Merdan Ghappar filmed inside China\'s detention system, published two weeks ago by the BBC\r\nA Uighur fashion model who filmed himself handcuffed to a bed in an epid… [+7194 chars]'
  },
  {
    source: {
      id: 'bbc-news',
      name: 'BBC News'
    },
    author: 'BBC News',
    title: 'Two charged with murder of Run-DMC\'s Jam Master Jay',
    description: 'The murder of the successful hip hop trio\'s DJ in Queens, NY had been unsolved for nearly 18 years.',
    url: 'http://www.bbc.co.uk/news/world-us-canada-53814900',
    urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/031D/production/_113979700_tv062944691.jpg',
    publishedAt: '2020-08-17T20:48:00Z',
    content: 'Image copyrightReutersImage caption\r\n Jam Master Jay (left) was killed in 2002\r\nTwo men have been charged with the nearly 18-year old unsolved murder of Jason Mizell, known as Jam Master Jay of the h… [+2943 chars]'
  }
]

function App() {
  const [newsArticales, setNewArticles] = useState([])
  useEffect(() => {
    alanBtn({
      key: alanAiKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewArticles(articles)
        }
      }
    })
  }, [])

  if (!newsArticales.length) {
    return <Instructions />
  }
  
  return (
    <div className="app">
        <NewsList articles={newsArticales}/>
    </div>
  );
}

export default App;
