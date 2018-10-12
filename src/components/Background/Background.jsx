import React from 'react';

import './Background.scss'

import NormalBG from './NormalBG'

import green from '../../images/flowers/green-flower.png'
import orange from '../../images/flowers/orange-flower.png'
import pink from '../../images/flowers/pink-flower.png'
import yellow from '../../images/flowers/yellow-flower.png'

const Background = (props) => {
  return (
    <div className='Background'>
      <NormalBG />
    </div>
  )
}
export default Background;
