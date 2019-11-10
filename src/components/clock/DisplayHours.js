import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class DisplayHours extends Component {
  render=()=> { 
    const todaysdate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
      return (
        <Table hover>
          <thead>
            <tr>
              <th>Todays Date</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Hours</th>
              <th>Owed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{todaysdate}</th>
              <td>{this.props.clockedintime}</td>
              <td>{this.props.clockedouttime}</td>
              <td>{this.props.hours}</td>
              <td>{(this.props.hours)*25}</td>
            </tr>
          </tbody>
        </Table>
      );
  }
}
