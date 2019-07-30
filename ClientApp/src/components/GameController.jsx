import React, { Component } from 'react';
import Home from './Home';
import Hand from './Hand';
import Enemy from './Enemy';
import Reward from './Reward';
import GameStart from './GameStart';
// import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
// import asyncBootstrapper from 'react-async-bootstrapper';
// import './GameController.css';

export class GameController extends React.Component {

  constructor(props) {
    super(props);
    fetch('api/SampleData/Enemies/1')
      .then(response => response.json())
      .then(data => {
         console.log(data);
         this.setState({ nextEnemy: data});
         console.log(this.state);
         let deck = [];
         for(let i = 0; i < 5; i++){
           deck.push({id:1, name: "Strike", cost: 1, type: "Attack", effects: "6 damage", color: this.state.class, upgraded: 0, cardText: "Deal 6 damage"});
           deck.push({id:1, name: "Defend", cost: 1, type: "Skill", effects: "6 block", color: this.state.class, upgraded: 0, cardText: "Block 6 damage"});
         }
         this.setState ({ deck: this.shuffle(deck)});
         this.setState({hand: this.state.deck.slice(0,5)})
         this.setState({deck: this.state.deck.slice(5)});
         console.log(this.state);
        this.setState({loading: false});
        console.log(this.state);

      });

    this.state = {
      home: true,
      start: false,
      loading: true,
      nextEnemy: {},
      map: false,
      battle: false,
      reward: false,
      class: "Red",
      deck: [],
      hand: [],
      discard: [],
      activeEnemy: {hp:12, nextAttack: ""},
      player: {hp:100, energy: 3, block: 0},
      rewards: []
      }

        this.handleSetHomeFalse = this.handleSetHomeFalse.bind(this);
        this.handleGameStart = this.handleGameStart.bind(this);
        this.endTurn = this.endTurn.bind(this);
        this.pickReward = this.pickReward.bind(this);
        this.useCard = this.useCard.bind(this);
}

  handleSetHomeFalse() {
    this.setState({home: false, start: true});
  }

  handleGameStart(color) {
    this.setState({start: false, map: true});
  }

  pickReward(index){
    console.log(index);
    if(isNaN(index) === false){
      this.state.deck.push(this.state.rewards[index]);
    }
    this.state.player.energy = 3;
    this.setState({player: this.state.player})
    this.state.deck = this.shuffle( this.state.deck.concat(this.state.hand).concat(this.state.discard));
    this.setState({deck: this.state.deck.slice(5), hand: this.state.deck.slice(0,5), discard: [], rewards: []});
    this.setState({reward:false, map: true});
    console.log(this.state);
    fetch('api/SampleData/Enemies/2')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({nextEnemy: data})

      })
  }

  handleStartBattle(){
    this.setState({map:false, battle: true});
    fetch('api/SampleData/Rewards/1')
      .then(response => response.json())
      .then(data => {
        data.forEach((el)=>{
          this.state.rewards.push(el)
        })
        this.state.rewards = this.shuffle(this.state.rewards);
        while(this.state.rewards.length > 3){
          this.state.rewards.pop();
        }
        this.setState({rewards: this.state.rewards});
        console.log(this.state);
        this.render();
      })
      this.state.activeEnemy.hp = this.state.nextEnemy.hp;
      this.state.activeEnemy.nextAttack = this.state.nextEnemy.attacks.split(',')[this.state.nextEnemy.attacks.split(',').length-1];
  }

  endTurn(effect, number, nextAttack){
    console.log(effect);
    console.log(number);
    this.state.player.energy = 3;
    this.setState({player: this.state.player})
    if(effect === 'damage'){
      this.state.player.hp -= number;
      this.setState({player: this.state.player})
    }
    let activeEnemy = this.state.activeEnemy;
    activeEnemy.nextAttack = nextAttack;
    this.setState({activeEnemy: activeEnemy})
    while(this.state.hand.length > 0){
      this.state.discard.push(this.state.hand.pop());
    }
    this.setState({discard: this.state.discard});
    while(this.state.discard.length > 0){
        this.state.deck.push(this.state.discard.pop())
    }
    console.log(this.state);
    while(this.state.hand.length < 5){
      this.state.hand.push(this.state.deck.shift());
      console.log(this.state.deck);
      this.setState({hand: this.state.hand, deck: this.state.deck });
      console.log(this.state.deck);
    }
    // this.render();
    this.setState({discard: []});
  }

  useCard(cardText, index){
    if(this.state.player.energy >= this.state.hand[index].cost){
      let effects = cardText.split(',');
      effects.forEach((el)=>{
        let value = parseInt(el.split(' ')[0]);
        let type = el.split(' ')[1];
        console.log(el);
        switch(type){
          case 'damage':
            this.state.activeEnemy.hp -= value;
            this.setState({activeEnemy: this.state.activeEnemy});
            if(this.state.activeEnemy.hp <= 0){
              this.setState({battle: false, reward: true})
            }
          break;
          case 'block':
            this.state.player.block += value;
            this.setState({player: this.state.player})
          break;
          case 'draw':
            this.state.hand.push(this.state.deck.shift());
            this.setState({hand: this.state.hand, deck: this.state.deck})
          break;
        }
      }
    )
      console.log(effects);
      this.state.player.energy -= this.state.hand[index].cost;
      this.setState({player: this.state.player});
      this.state.discard.push(this.state.hand[index]);
      this.setState({discard: this.state.discard})
      this.setState({hand: this.state.hand.slice(0,index).concat(this.state.hand.slice(index+1))})
    }
  }

  shuffle(deck) {
    var i = 0;
    var j = 0;
    var temp = null;
    for (i = deck.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
  }


  render(){
    console.log(this.state);
    console.log(window.location.href.split('/'))
    if(this.state.home === true) {
      return(
        <div>
          <Home setHome={this.handleSetHomeFalse} />
        </div>
      )
    }
    if(this.state.start === true){
      return(
        <div>
          <GameStart GameStart={this.handleGameStart} />
        </div>
      )
    }
    if(this.state.loading === true){
      return(
        <div>Loading..</div>

      )
    }if(this.state.map === true){
      return(
        <div><h1>The Map!</h1><h1 onClick={()=>this.handleStartBattle()}>🦑</h1></div>
      )
    }if(this.state.battle === true){
      return(
        <div className="page">
          <Enemy enemy={this.state.nextEnemy} endTurn = {this.endTurn} activeEnemy={this.state.activeEnemy}></Enemy>
          <Hand cards={this.state.hand} useCard = {this.useCard}></Hand>
        </div>
      );
    }if(this.state.reward === true){
      return(
        <div className="page">
          <Reward cards={this.state.rewards} pickReward = {this.pickReward}></Reward>
        </div>
      );
    }

  }
}
