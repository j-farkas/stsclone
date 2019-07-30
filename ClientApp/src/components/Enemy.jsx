import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Enemy(props) {
  function endTurn(effect, number){
    props.endTurn(effect, number, attacks[Math.floor((Math.random() * (attacks.length-1)+1))])
  }

  let attacks = props.enemy.attacks.split(',');
  let random = false;
  console.log(attacks);
  if(attacks[0] === 'random'){
    // attacks = attacks.slice(1);
    random = true;
  }
  console.log(attacks);


  return(
    <div className='Enemy'>
      <h3>Next Attack will apply: {props.activeEnemy.nextAttack} HP: {props.activeEnemy.hp}</h3>
      <button onClick ={()=>endTurn(props.activeEnemy.nextAttack.split(' ')[1], props.activeEnemy.nextAttack.split(' ')[2])}>End Turn</button>
    </div>
  );
}

Enemy.propTypes = {
  enemy: PropTypes.object,
  activeEnemy: PropTypes.object,
  endTurn: PropTypes.func
}
