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
  'https://twitter.com/Nameless_itf/status/1724355584093495768',
  'https://twitter.com/Nameless_itf/status/1724365041896739241',
  'https://twitter.com/Nameless_itf/status/1724371079534399623',
  'https://twitter.com/Nameless_itf/status/1724371173344162274',
  'https://twitter.com/Nameless_itf/status/1724372013576560807',
  'https://twitter.com/Nameless_itf/status/1724430685421625670',
  'https://twitter.com/Nameless_itf/status/1724432862303179007',
  'https://twitter.com/Nameless_itf/status/1724433970727706876',
  'https://twitter.com/Nameless_itf/status/1724630018448580895',
  'https://twitter.com/Nameless_itf/status/1724635481852592399',
  'https://twitter.com/Nameless_itf/status/1724646944008761696',
  'https://twitter.com/Nameless_itf/status/1725072153303998608',
  'https://twitter.com/Nameless_itf/status/1725138299227095446',
  'https://twitter.com/Nameless_itf/status/1725138465959076280',
  'https://twitter.com/Nameless_itf/status/1725138677108719974',
  'https://twitter.com/Nameless_itf/status/1725138850144768176',
  'https://twitter.com/Nameless_itf/status/1725139189975675307',
  'https://twitter.com/Nameless_itf/status/1725139391537164684',
  'https://twitter.com/Nameless_itf/status/1725139616695713830',
  'https://twitter.com/Nameless_itf/status/1725139773822792114',
  'https://twitter.com/Nameless_itf/status/1725324322737459567',
  'https://twitter.com/Nameless_itf/status/1725325028278083680',
  'https://twitter.com/Nameless_itf/status/1725325195983061318',
  'https://twitter.com/Nameless_itf/status/1725325532253032704',
  'https://twitter.com/Nameless_itf/status/1725326059481272466',
  'https://twitter.com/Nameless_itf/status/1725326275429167555',
  'https://twitter.com/Nameless_itf/status/1725326345469890616',
  'https://twitter.com/Nameless_itf/status/1725326767429492856',
  'https://twitter.com/Nameless_itf/status/1725326878259732676',
  'https://twitter.com/Nameless_itf/status/1725326922740318712'
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
      <p>読み込みまで時間がかかることがあります。ツイートが表示されない場合でも、そのまましばらくお待ちください...</p>
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
