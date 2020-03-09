import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import Solution from './Components/Solution/Solution';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
          {this.props.children}
        <Footer/>
      </>
    );
  }
}

export default App;
