import React, { Component } from 'react';
import Home from './Home';
import Hand from './Hand';
import Enemy from './Enemy';
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
           deck.push({Id:1, Name: "Strike", Cost: 1, Type: "Attack", Effects: "6 damage", Color: this.state.class, Upgraded: 0, CardText: "Deal 6 damage"});
           deck.push({Id:1, Name: "Defend", Cost: 1, Type: "Skill", Effects: "6 block", Color: this.state.class, Upgraded: 0, CardText: "Block 6 damage"});
         }
         this.setState ({ deck: this.shuffle(deck)});
         this.setState({hand: this.state.deck.slice(0,5)})
         this.setState({deck: this.state.deck.slice(5)});
         console.log(this.state);


    //     this.state.deck = this.shuffle(data.slice());
    //     for(let i = 0; i < 10; i++){
    //       this.state.game.players[i%2].push(this.state.deck[i]);
    //     }
    //     for(let i = 0; i < 5; i++){
    //       this.state.game.players[0][i].owner = 'b';
    //       this.state.game.players[1][i].owner = 'r';
    //     }
    //
    //     console.log(this.state.deck);
    //     console.log(this.state.game);
            this.setState({loading: false});
            console.log(this.state);
    //     this.setState({game: this.state.game});
          // this.render();
    //
    let attacks = this.state.nextEnemy.attacks.split(',');
    let random = false;
    console.log(attacks);
    if(attacks[0] === 'random'){
      attacks = attacks.slice(1);
      random = true;
    }

    this.state.activeEnemy.nextAttack = attacks[Math.floor((Math.random() * (attacks.length)))];
    this.setState({activeEnemy: this.state.activeEnemy})


       console.log("hey")
      });

    this.state = {
      home: true,
      start: false,
      loading: true,
      nextEnemy: {},
      map: false,
      battle: false,
      class: "Red",
      deck: [],
      hand: [],
      discard: [],
      activeEnemy: {hp:12, nextAttack: ""},
      player: {hp:100, energy: 3, block: 0},
  //     game: {
  //       players: [[],[]],
  //       turn: 0,
  //       board: [0,1,2,3,4,5,6,7,8],
  //       selectedCard: null,
  //       boardLocation: null
  //       },
  //       neighbors: {
  //         0: {right: 1, bottom: 3},
  //         1: {left: 0, right: 2, bottom: 4},
  //         2: {left: 1, bottom: 5},
  //         3: {top: 0, right: 4, bottom: 6},
  //         4: {top: 1, bottom: 7, left: 3, right: 5},
  //         5: {left: 4, top: 2, bottom: 8},
  //         6: {top: 3, right: 7},
  //         7: {left: 6, top: 4, right: 8},
  //         8: {top: 5, left: 7}
  //       }
      }
  //   this.selectCard = this.selectCard.bind(this);
        this.handleSetHomeFalse = this.handleSetHomeFalse.bind(this);
        this.handleGameStart = this.handleGameStart.bind(this);
        this.endTurn = this.endTurn.bind(this);
        this.useCard = this.useCard.bind(this);
}

  handleSetHomeFalse() {
    this.setState({home: false, start: true});
  }

  handleGameStart(color) {
    this.setState({start: false, map: true});
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
    console.log(this.state);
    while(this.state.hand.length < 5){
      if(this.state.discard.length > 0){
        this.setState({deck: this.state.deck.concat(this.shuffle(this.state.discard)),discard: []})
      }
      this.state.hand.push(this.state.deck.pop());
      this.setState({hand: this.state.hand });
    }
    this.render();
    // this.setState({hand: this.state.hand, discard: this.state.discard, deck: this.state.deck});
  }

  useCard(cardText, index){
    if(this.state.player.energy >= this.state.hand[index].Cost){
      let effects = cardText.split(',');
      effects.forEach((el)=>{
        let value = parseInt(el.split(' ')[0]);
        let type = el.split(' ')[1];

        switch(type){
          case 'damage':
            this.state.activeEnemy.hp -= value;
            this.setState({activeEnemy: this.state.activeEnemy});
          break;
          case 'block':
            this.state.player.block += value;
            this.setState({player: this.state.player})
          break;
        }
      }
    )
      console.log(effects);
      this.state.player.energy -= this.state.hand[index].Cost;
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

  // selectCard(cardId) {
  //   this.state.game.selectedCard = cardId;
  //   this.setState({selectedState: cardId});
  // }
  //
  // handleDeselectCard() {
  //   if(this.state.game.selectedCard !== null && this.state.game.boardLocation !== null && isNaN(this.state.game.board[this.state.game.boardLocation]) === false) {
  //     this.setState({boardLocation: null});
  //     this.state.game.board[this.state.game.boardLocation] = this.state.game.players[this.state.game.turn % 2].filter((el)=>this.state.game.selectedCard === el.id)[0];
  //     this.state.game.players[this.state.game.turn % 2] = this.state.game.players[this.state.game.turn % 2].filter((el)=>this.state.game.selectedCard !== el.id)
  //     this.checkFlip(this.state.game.boardLocation);
  //     this.state.game.boardLocation = null;
  //     this.state.game.selectedCard = null;
  //     if(this.state.game.turn === 8) {
  //       this.checkForWinner();
  //     }
  //     this.state.game.turn++
  //     // this.setState({game: this.state.game.turn+1});
  //   }
  // }
  //
  // checkFlip(loc){
  //   let dict = {
  //     left: "right",
  //     top: "bottom",
  //     right: "left",
  //     bottom: "top"
  //   }
  //   let directions = Object.keys(this.state.neighbors[loc]);
  //   console.log(directions);
  //   directions.forEach((el)=>{
  //
  //     console.log(this.state.game.board[this.state.neighbors[loc][el]]);
  //
  //     if(isNaN(this.state.game.board[this.state.neighbors[loc][el]]) === true ){
  //
  //       let neighborino = this.state.game.board[this.state.neighbors[loc][el]];
  //       console.log(this.state.neighbors[loc][el]);
  //       if(this.state.game.board[loc][el] > neighborino[dict[el]]){
  //         if(neighborino.owner !== this.state.game.board[loc].owner){
  //           neighborino.owner = this.state.game.board[loc].owner;
  //           console.log(document.getElementsByClassName('b'+this.state.neighbors[loc][el])[0].classList)
  //           document.getElementsByClassName('b'+this.state.neighbors[loc][el])[0].classList.add("flip");
  //           setTimeout(()=>document.getElementsByClassName('b'+this.state.neighbors[loc][el])[0].classList.remove("flip"),700)
  //         }
  //         console.log(this.state);
  //       }
  //     }
  //   })
  //
  // }
  //
  // checkForWinner() {
  //   // if(this.state.game.players[0])
  //   console.log(this.state.game.turn + 'wins')
  //   console.log(this.state.game.players[1]);
  //   let points = 0;
  //   this.state.game.board.forEach((card) => {
  //     if (card.owner == 'b') {
  //       points +=1;
  //     }
  //   });
  //   points += this.state.game.players[0].length;
  //   if(points > 5) {
  //     console.log('player 1 wins');
  //   } else if( points === 5) {
  //     console.log('tie');
  //   } else {
  //     console.log('player 2 wins');
  //   }
  // }
  //
  // handleDropCard(location) {
  //   let newState = {
  //     boardLocation: location
  //   }
  //   this.state.game.boardLocation = location;
  //   this.setState(newState);
  // }

    // handleSetNull() {
    //   this.state.game.boardLocation = null;
    //   this.setState({boardLocation: null});
    // }

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
      // console.log(this.state);
      return(
        <div>Loading..</div>

      )
    }if(this.state.map === true){
      // console.log(this.state);
      return(
        <div><h1>The Map!</h1><h1 onClick={()=>this.setState({map:false, battle: true})}>🦑</h1></div>


      )
    }if(this.state.battle === true){
      return(
        <div className="page">
          <Enemy enemy={this.state.nextEnemy} endTurn = {this.endTurn} activeEnemy={this.state.activeEnemy}></Enemy>
          <Hand cards={this.state.hand} useCard = {this.useCard}></Hand>
        </div>
      );
    }

    // setTimeout(() => {


    // }, 5000);

  }
}
