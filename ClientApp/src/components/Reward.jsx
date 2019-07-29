import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card'

export default function Reward(props) {
  function pickReward(index){
    props.pickReward(index);
  }
  
  return(
    <div className='Reward'>
    {props.cards.map((card, index) =>
      <div onClick={()=>pickReward(card.Effects, index)}className='card${index}'><Card cardInfo={card}></Card></div>
    )}
    </div>
  );
}

Reward.propTypes = {
  cards: PropTypes.array,
  pickReward: PropTypes.func
}
