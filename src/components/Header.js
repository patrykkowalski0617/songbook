import React from 'react';

import Buttons from './Buttons'

function Header(){
  return (
    <header id='header'>
      <div className='container'>
        <h1>Song<br/>Book</h1>
        <Buttons/>
      </div>
    </header>
  )
}

export default Header;
