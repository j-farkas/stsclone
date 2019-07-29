import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card'

export default function Hand(props) {
  function useCard(cardText, index){
    props.useCard(cardText, index);
  }


  return(
    <div className='Hand'>
      {props.cards.map((card, index) =>
        <div onClick={()=>useCard(card.Effects, index)}className='card${index}'><Card cardInfo={card}></Card></div>
      )}
    </div>
  );
}

Hand.propTypes = {
  cards: PropTypes.array,
  useCard: PropTypes.func
}
