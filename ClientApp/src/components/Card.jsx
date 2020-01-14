import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card(props) {
  return(
    <div className= {props.cardInfo.type+ ' card'}>
      <h2> <span className = 'circled'>{props.cardInfo.cost}</span><span className='cardName'>{props.cardInfo.name}</span></h2>
      <div className='cardImage'></div><div> <span className = 'type'>{props.cardInfo.type}</span></div><hr></hr>
      <h6 className ='cardText'>{props.cardInfo.cardText}</h6>

    </div>
  );
}

Card.propTypes = {
  cardInfo: PropTypes.object,
  playerbuffs: PropTypes.object,
  playerdebuffs: PropTypes.object,
  enemydebuffs: PropTypes.object
}
