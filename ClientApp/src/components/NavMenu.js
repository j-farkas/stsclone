import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header(props) {
  function viewDeck(){
    props.viewDeck();
    document.getElementsByTagName('span').item(0).classList.toggle('show');
  }

  return(<div className='header'>HP:{props.player.hp}/{props.player.maxHP} Block: {props.player.block} Energy: {props.player.energy}/3 <span className='deck' onClick={()=>viewDeck()}>View Deck</span></div>
  );
}

Header.propTypes = {
  player: PropTypes.object,
  viewDeck: PropTypes.func
}
