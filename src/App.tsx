import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import './App.css';
import retry from './assets/retry.svg'

function App() {
  const [quoteStyle, setQuoteStyle] = useState({fontSize: 48})
  const [quote, setQuote] = useState("Have Fun!")

  const random = async () =>{
    const url = "https://api.kanye.rest"
    const response = await fetch(url)
    const json = await response.json()
    setQuote(await json.quote)
    if (isMobile){
      setQuoteStyle({fontSize: 20})
    }
    else{
      if (JSON.stringify(json).length >90){
        setQuoteStyle({fontSize: 30})
      }
      else{
        setQuoteStyle({fontSize: 48})
      }
    }
  }

  return (
    <div className="App">
      <img className='happy' src="https://freepngimg.com/download/kanye_west/1-2-kanye-west-png-hd.png" alt="" />
      <main>
        <h1>RANDOM KANYE <br/>QUOTE</h1>
        <div className="quote-space">
          <div style={quoteStyle} className="quote">{quote}</div>
          <p className="kanye-west">-Kanye West</p>
        </div>
        <div onClick={random} className="button">
          RANDOM <img className='retry' src={retry} alt="" />
        </div>
      </main>
      <img className='angry' src="https://www.seekpng.com/png/full/12-126395_kanye-head-png-kanye-west-transparent-background.png" alt="" />
    </div>
  );
}

export default App;
