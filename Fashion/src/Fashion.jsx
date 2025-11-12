import React from 'react';
import './fashion.css';

function Fashion(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p className="price">Price: ${props.price}</p>
    </div>
  );
}

export default Fashion;
