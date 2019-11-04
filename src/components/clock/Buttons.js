import React, { Component } from 'react'
import ClockinButton from './ClockinButton'
import ClockoutButton from './ClockoutButton'


class Buttons extends Component {
    
    constructor(props) {
       super(props);
      this.handleClockinClick = this.handleClockinClick.bind(this)
     this.handleClockoutClick = this.handleClockoutClick.bind(this)
    this.state = {isClockedIn: false,
    clockedintime: '',
    clockedouttime: ''
    }}

    async handleClockinClick(){

     await  this.setState({
        isClockedIn: !this.state.isClockedIn, 
        clockedintime: new Date().toLocaleTimeString()
      })
      console.log(this.state)
      }
      
  
    async handleClockoutClick(){
      
          await  this.setState({
           isClockedIn: !this.state.isClockedIn,
           clockedouttime: new Date().toLocaleTimeString()
          })
           console.log(this.state)
          }
    
    render(){ 
      const isClockedIn = this.state.isClockedIn
      let button
      if (isClockedIn) {
        button = <ClockoutButton onClick= {this.handleClockoutClick}/>
      } else {
        button = <ClockinButton onClick = {this.handleClockinClick}/>}
      return (
        <div>
        {button}
        </div>
      )}
    } 
  
  


export default Buttons;