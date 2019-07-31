import React from 'react';
import PropTypes from 'prop-types';


function GameStart(props){
    function GameStart(color) {
        props.GameStart(color)
    }
    return (
        <div>
        <h1>This is the splash screen</h1>
        <h2 onClick={() => GameStart('Red')}>Red Class</h2>
        </div>
    );
}

GameStart.propTypes = {
    GameStart: PropTypes.func
}

export default GameStart;
