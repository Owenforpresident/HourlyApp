import React, { Component } from 'react'
import ClockinButton from './ClockinButton'
import ClockoutButton from './ClockoutButton'
import DisplayHours from './DisplayHours';

class Buttons extends Component {
constructor(props) {
  super(props);
      this.handleClockinClick = this.handleClockinClick.bind(this)
      this.handleClockoutClick = this.handleClockoutClick.bind(this)
  this.state = {isClockedIn: false,
                clockedintime: '',
                clockedouttime: '',
                hours:[], 
              }
  }

timeStringToFloat = (time) => {
    const hoursMinutes = time.split(/[.:]/);
    const hours = parseInt(hoursMinutes[0], 10);
    const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }
 Calchours = () => { 
    const intimevalue = this.timeStringToFloat(this.state.clockedintime)
    const outtimevalue = this.timeStringToFloat(this.state.clockedouttime)
    this.setState({hours: outtimevalue - intimevalue})
    console.log(this.state)
  }

  async handleClockinClick(){
      await  this.setState({
        isClockedIn: !this.state.isClockedIn, 
        clockedintime: new Date().toLocaleTimeString()
      })
      }
      
  async handleClockoutClick(){
     await  this.setState({
          isClockedIn: !this.state.isClockedIn,
          clockedouttime: new Date().toLocaleTimeString(),
      })  
      this.Calchours()
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
        <DisplayHours {...this.state}/>
        </div>
      )}
    } 
  
  


export default Buttons;