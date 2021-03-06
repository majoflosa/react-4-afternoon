import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    axios.get( `http://localhost:3005/students/${this.props.match.params.id}` )
      .then( response => {
        console.log( 'response.data', response.data );
        this.setState({ studentInfo: response.data });
        console.log( this.state.studentInfo );
      })
  }

  render() {
    console.log( this.props.match );
    return (
      <div className="box">
        <Link to={'/classlist/' + this.state.studentInfo.class}>
          <div>Back to List</div>
        </Link>
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    )
  }
}