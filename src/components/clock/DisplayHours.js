import React, { Component } from 'react'
import { Table } from 'reactstrap';

export default class DisplayHours extends Component {
  render() {
      return (
        <Table hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time In</th>
              <th>Time Out</th>
              <th>Hours</th>
              <th>Owed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.props.clockedintime}</td>
              <td>{this.props.clockedouttime}</td>
              <td>{this.props.hours}</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      );
  }
}
