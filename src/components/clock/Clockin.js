import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Clockin extends Component {
  
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.props);
  }

  render() { 
    return (
      <Button onClick= {this.handleClick} color = "success" size = "lg" block> Clock in</Button>
    )
  }
}

export default Clockin;