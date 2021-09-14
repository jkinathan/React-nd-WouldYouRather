
import './App.css';
import React, {Component} from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
// import Nav from './components/nav';
import Home from './components/home';


class App extends Component {

  componentDidMount() {
    this.props.handleInitialData();
  }


  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
  
}

export default connect(null,{handleInitialData}) (App);
