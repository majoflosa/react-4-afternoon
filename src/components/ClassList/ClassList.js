import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [],
      // currentClass: this.props.match.params.class
    }
  }

  componentDidMount() {
    axios.get( `http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then( response => {
        console.log('response.data: ', response.data);
        this.setState({ students: response.data });
        console.log('this.state.students: ', this.state.students);
      } );
  }

  render() {
    let studentList = this.state.students.map( student => {
      return (
        <Link key={student.id} to={'/student/' + student.id}>
          <h3>{student.first_name} {student.last_name}</h3>
        </Link>
      );
    });
    
    return (
      <div className="box">
        <Link to='/'>
          Back to Home
        </Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { studentList }
      </div>
    )
  }
}