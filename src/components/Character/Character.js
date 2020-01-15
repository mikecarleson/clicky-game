import React from 'react';
import './Character.css';

const Character = props => (
  <div className="crt card " onClick={e => props.clickEvent(e.target.src)}>
    <img className="crt card-img-top card-height" src={props.name} alt="" />
  </div>
);

export default Character;
