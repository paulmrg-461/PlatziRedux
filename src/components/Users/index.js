import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner'

import * as usersActions from '../../actions/usersActions';

class Users extends Component {

  componentDidMount(){
    this.props.getUsers();
  }

  loadContent = () => {

    if(this.props.loading){
      return <Spinner/>
    }

    return (
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
    );
  }

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
        { this.loadContent() }
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect( mapStateToProps, usersActions ) (Users);