import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Users extends Component {

  /* async componentDidMount(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: response.data
    })
  } */

  getRows = () => (
    this.props.users.map((user) => (
      <tr key={user.id}>
        <td>
          { user.name }
        </td>
        <td>
          { user.email }
        </td>
        <td>
          { user.website }
        </td>
      </tr>
    ))
  );
  
  render() {
    return(
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Website
              </th>
            </tr>
          </thead>
          <tbody>
          { this.getRows() }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect( mapStateToProps, { /*Actions*/ } ) (Users);