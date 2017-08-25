import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router , Route } from 'react-router-dom'

import './assets/index.css'

import Header from './components/header.js'
import List from './components/list.js'
import Right from './components/right.js'
import About from './components/about.js'
import Test from './components/test.js'

class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
      
  }
  render() {
    return (
      <div>
        <Router>
            <div>
              <Header />
              <div className="mid">
                <Route exact path="/" component={List}/>
                <Route path="/about" component={About}/>
                <Route exact path="/learn" component={List}/>
                <Route exact path="/life" component={List}/>
                <Right />
              </div>
            </div>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(
  (
    <App />
  ),
  document.getElementById('app')
);

