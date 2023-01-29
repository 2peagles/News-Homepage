import React from 'react'
import './App.css'
import { Nav } from './Nav'

function App() {

  return (
    <div className="app">
      <Nav />
      <div className='app_container'>
        <div  className='hero'>
          <img src='/images/image-web-3-desktop.jpg' alt=''/>
          <div className='hero_content'>
            <h1>the bright future of web 3.0?</h1>
            <p> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? </p>
            <button className='hero_btn'>read more</button>
          </div>
        </div>


        <div className='news'>
          <h2>new</h2>
          <div>
            <span>New Hydrogen VS Electric Cars</span>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div>
            <span>The Downsides of AI Artistry </span>
            <p>What are the possible adverse effects of on-demand AI image generation? </p>
          </div>
          <div>
            <span>Is VC Funding Drying Up?</span>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means. </p>
          </div>
        </div>


        <div className='topthree'>
          <div className=''>
            <img src='/images/image-retro-pcs.jpg' alt='' className=''/>
            <div className='topthree_card'>
            <span>01</span>
            <span>Reviving Retro</span>
            <p>Cs What happens when old PCs are given modern upgrades? </p>
          </div>
          </div>
          <div>
            <img src='/images/image-top-laptops.jpg' alt=''/>
            <div className='topthree_card'>
            <span>02</span>
            <span>Top 10 Laptops of 2022</span>
            <p>Our best picks for various needs and budgets.</p>
          </div>
          </div>
          <div>
            <img src='/images/image-gaming-growth.jpg' alt=''/>
            <div className='topthree_card'>
            <span>03</span>
            <span>The Growth of Gaming</span>
            <p> How the pandemic has sparked fresh opportunities.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
