import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  async componentDidMount(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: response.data
    })
  }

  getRows = () => (
    this.state.users.map((user) => (
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
      <div className="margin">
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

export default Users;