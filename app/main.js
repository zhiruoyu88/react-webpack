import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'

import './assets/css/index.css'

import Header from './components/header.js'
import List from './components/list.js'
import Right from './components/right.js'
import About from './components/about.js'
import NotFound from './components/notFound.js'
import Write from './components/write.js'
import Footer from './components/footer.js'


class App extends React.Component {
  constructor(props){
	super(props)
  }
  componentDidMount(){
      
  }
  render() {
    return (
      <div>
            <Header />
            <div style={{overflow:'hidden'}} className="mid">
				{this.props.children}
            	<Right />
			</div>
			<Footer/>
      </div>
    )
  }
}

ReactDOM.render(
  (
     <Router>
		<App>
			<Switch>
				<Route exact path="/about" component={About}/>
				<Route exact path="/write" component={Write}/>
				<Route exact path="/" component={List}/>
				<Route exact path="/article/:type/pn/:pn" component={List}/>
				<Route exact path="/article/pn/:pn" component={List}/>
				<Route exact path="/article/:type/:id" component={List}/>
				<Route exact path="/article/:type" component={List}/>
				<Route exact path="/article" component={List}/>
				<Route component={NotFound}/>
			</Switch>
		</App>
	</Router>
  ),
  document.getElementById('app')
);

