import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import Solution from './Components/Solution/Solution';

class App extends React.Component {
  render() {
    return (
      <div className="">
        <Header/>
          {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
