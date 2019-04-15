import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/header'
import { lightBlue } from '@material-ui/core/colors';

class App extends Component {
  render() {
    return (
      <div className="App" style={{
        backgroundColor: 'lightBlue',
        height: '2000px'
      }}>
        <Header />
      </div>
    );
  }
}

export default App;
