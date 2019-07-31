import React from 'react';
import PropTypes from 'prop-types';


function Home(props){
    function setHome() {
        props.setHome()
    }
    return (
        <div>
        <h1>This is the splash screen</h1>
        <h2 onClick={() => setHome()}>New Game</h2>
        </div>
    );
}

Home.propTypes = {
    setHome: PropTypes.func
}

export default Home;
