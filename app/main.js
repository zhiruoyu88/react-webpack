import React from 'react'
import ReactDOM from 'react-dom'

import './assets/index.css'
class App extends React.Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div>hello ~</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

