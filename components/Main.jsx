import React from 'react';
import { Link } from 'react-router';

function Main({ children }) {
  return (
    <div className="main">
      <header>
        <h1><Link to="/">React SSR Sample</Link></h1>
      </header>
      {children}
    </div>
  );
}

Main.propTypes = {
  children: React.PropTypes.object,
  // csrfToken: React.PropTypes.string.isRequired,
};

export default Main;
