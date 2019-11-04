import React, { Component } from 'react'
import ClockinButton from './ClockinButton'
import ClockoutButton from './ClockoutButton'


class Buttons extends Component {
    
    constructor(props) {
       super(props);
      this.handleClockinClick = this.handleClockinClick.bind(this)
     this.handleClockoutClick = this.handleClockoutClick.bind(this)
    this.state = {isClockedIn: false}
    }
  
    handleClockinClick(){
      this.setState({isClockedIn: true})
      console.log(this.props)
    }
  
    handleClockoutClick(){
      this.setState({isClockedIn: false})
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
      )
    } 
  } 


export default Buttons;