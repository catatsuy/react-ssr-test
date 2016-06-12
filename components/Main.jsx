import React from 'react'

export default React.createClass({
  render() {
    return (
      <div class="main">
        <header>
          <h1><a href="/">React SSR Sample</a></h1>
        </header>
        {this.props.children}
      </div>
    )
  }
})
