import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header(props) {
  function viewDeck(){
    props.viewDeck();
  }

  return(<div className='header'>HP:{props.player.hp}/{props.player.maxHP} Block: {props.player.block} Energy: {props.player.energy}/3 <span onClick={()=>viewDeck()}>View Deck</span></div>
  );
}

Header.propTypes = {
  player: PropTypes.object,
  viewDeck: PropTypes.func
}
