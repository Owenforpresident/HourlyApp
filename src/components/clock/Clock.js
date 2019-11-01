import React, { Component } from 'react'
import Clockin from "./Clockin"

export default class Clock extends Component {
    constructor(props){
        super(props);
    this.state= { 
        time: new Date().toLocaleTimeString()
    };
    }
    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleTimeString()
        });
      }
    render() {
        return (
          <div> <h1 style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', padding:20, marginTop:250}}>
          The time is {this.state.time} 
          <Clockin {...this.state} />
          </h1></div>
           
        )
    };
}