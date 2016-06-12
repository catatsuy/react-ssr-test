import React from 'react';
import { Link } from 'react-router';

function Leaf() {
  return (
    <div className="leaf">
      <header>
        <h1><Link to="/">React SSR Sample</Link></h1>
        <p>this is leaf!</p>
      </header>
    </div>
  );
}

export default Leaf;
