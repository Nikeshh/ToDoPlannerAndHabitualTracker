import React, { Component } from 'react';
import Splash from './Splash';
import Home from './Home';

export default class Launch extends Component {

  constructor(props){
    super(props);
    this.state = {
        component : <Splash />
    }
  }

  componentDidMount(){
    this.timeoutHandle = setTimeout(()=>{
         this.setState({ component: <Home /> })
    }, 2000);
  }

  componentWillUnmount(){
    clearTimeout(this.timeoutHandle); 
  }

  render() {
    return (
      this.state.component
    )
  }
  
}