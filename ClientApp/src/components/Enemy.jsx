import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Enemy(props) {
  function endTurn(effect, number){
    props.endTurn(effect, number, attacks[Math.floor((Math.random() * (attacks.length-1)+1))])
  }

  let attacks = props.enemy.attacks.split(',');
  let random = false;
  console.log(props.activeEnemy.nextAttack.split(' ')[2]);
  if(attacks[0] === 'random'){
    // attacks = attacks.slice(1);
    random = true;
  }
  console.log(parseInt(props.activeEnemy.nextAttack.split(' ')[1])+props.enemybuffs.str+ ' ' + props.activeEnemy.nextAttack.split(' ')[2]);
  // let nextAttack = props.activeEnemy.nextAttack;
  // if(nextAttack.split(' ')[1] === 'damage'){
  //   nextAttack = nextAttack.split(' '[0]+props.enemybuffs.str) + ' ' + nextAttack.split(' ')[1];
  // }
  let modifier = 1;
  if(props.enemydebuffs.weak > 0){
    modifier *= .5;
  }
  if(props.activeEnemy.nextAttack.split(' ')[2] === 'damage'){

      return(
        <div className='Enemy'>
          <h3>Next Attack will apply: {(parseInt(props.activeEnemy.nextAttack.split(' ')[1])+props.enemybuffs.str)*modifier} {props.activeEnemy.nextAttack.split(' ')[2]} HP: {props.activeEnemy.hp}</h3>
          <button onClick ={()=>endTurn(props.activeEnemy.nextAttack.split(' ')[1], props.activeEnemy.nextAttack.split(' ')[2])}>End Turn</button>
        </div>
      );
    }

  return(
    <div className='Enemy'>
      <h3>Next Attack will apply: {props.activeEnemy.nextAttack.split(' ')[1]} {props.activeEnemy.nextAttack.split(' ')[2]} HP: {props.activeEnemy.hp}</h3>
      <button onClick ={()=>endTurn(props.activeEnemy.nextAttack.split(' ')[1], props.activeEnemy.nextAttack.split(' ')[2])}>End Turn</button>
    </div>
  );
}

Enemy.propTypes = {
  enemy: PropTypes.object,
  activeEnemy: PropTypes.object,
  endTurn: PropTypes.func,
  enemybuffs: PropTypes.object,
  enemydebuffs: PropTypes.object
}
