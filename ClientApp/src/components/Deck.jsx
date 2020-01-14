import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Deck.css';

export default function Hand(props) {


  return(
    <div className='Deck'>
      {props.cards.map((card, index) =>
        <div className='deckCard'><Card cardInfo={card}></Card></div>
      )}
    </div>
  );
}

Hand.propTypes = {
  cards: PropTypes.array
}
