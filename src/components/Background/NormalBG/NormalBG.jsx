import React from 'react';

import './NormalBG.scss'

import green from '../../../images/flowers/green-flower.png'
import orange from '../../../images/flowers/orange-flower.png'
import pink from '../../../images/flowers/pink-flower.png'
import yellow from '../../../images/flowers/yellow-flower.png'

import grass from '../../../images/grass.png'

const NormalBG = () => {
  return (
    <div className='NormalBG'>
      <div id="fill-canvas"></div>
      <div className="flowers">
        <img id="flower-1" className="flower sm green" src={green} alt="green-flower"></img>
        <img id="flower-2" className="flower md green" src={green} alt="green-flower"></img>
        <img id="flower-3" className="flower lg orange" src={orange} alt="orange-flower"></img>
        <img id="flower-4" className="flower sm orange" src={orange} alt="orange-flower"></img>
        <img id="flower-5" className="flower md pink" src={pink} alt="pink-flower"></img>
        <img id="flower-6" className="flower lg pink" src={pink} alt="pink-flower"></img>
        <img id="flower-7" className="flower sm yellow" src={yellow} alt="yellow-flower"></img>
        <img id="flower-8" className="flower md yellow" src={yellow} alt="yellow-flower"></img>
      </div>
      <div className="grass">
        <img src={grass} alt="grass"/>
      </div>
    </div>
  )
}
export default NormalBG
