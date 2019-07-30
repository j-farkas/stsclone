import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return(<div>HP:{props.player.hp}/{props.player.maxHP} Block: {props.player.block}</div>
  );
}

Header.propTypes = {
  player: PropTypes.object
}
