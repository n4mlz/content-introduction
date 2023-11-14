import React from 'react'
import './App.css'

const tweets: string[] = [
  'https://twitter.com/Nameless_itf/status/1724342244730454093',
  'https://twitter.com/Nameless_itf/status/1724342246823342591',
  'https://twitter.com/Nameless_itf/status/1724342248685670557',
  'https://twitter.com/Nameless_itf/status/1724342250325618756',
  'https://twitter.com/Nameless_itf/status/1724342252053659892',
  'https://twitter.com/Nameless_itf/status/1724342253790040388',
  'https://twitter.com/Nameless_itf/status/1724342255438487609',
  'https://twitter.com/Nameless_itf/status/1724342257258803326',
  'https://twitter.com/Nameless_itf/status/1724342259062301112',
  'https://twitter.com/Nameless_itf/status/1724342260819742909',
  'https://twitter.com/Nameless_itf/status/1724355584093495768'
];

function indicator(i: number) {
  i = Math.abs(i);
  var cent = i % 100;
  if (cent >= 10 && cent <= 20) return i + 'th';
  var dec = i % 10;
  if (dec === 1) return i + 'st';
  if (dec === 2) return i + 'nd';
  if (dec === 3) return i + 'rd';
  return i + 'th';
}

const Header: React.FC = () => {
  return (
    <header>
      <h1 className='gradation'>#コンテンツ入門2023</h1>
    </header>
  )
}

const Tweet: React.FC<{ url: string, num: number }> = (props) => {
  return (
    <div className='tweet'>
      <p className='number gradation'>{indicator(props.num + 1)} tweet</p>
      <blockquote className='twitter-tweet'><a href={props.url} /></blockquote>
    </div>
  )
}

const Tweets: React.FC = () => {

  return (
    <div className='tweets'>
      {tweets.map((tweet, index) => <Tweet url={tweet} num={index} key={index} />)}
    </div>
  )
}

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Tweets />
    </>
  )
}

export default App;
