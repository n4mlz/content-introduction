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

const pr = new Intl.PluralRules("en-US", { type: "ordinal" });
const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n: number) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

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
      <p className='number gradation'>{formatOrdinals(props.num + 1)} tweet</p>
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
