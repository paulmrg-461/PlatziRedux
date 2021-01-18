import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './Table'
import Spinner from '../General/Spinner'
import Fatal from '../General/Fatal'

import * as usersActions from '../../actions/usersActions';

class Users extends Component {

  componentDidMount(){
    this.props.getUsers();
  }

  loadContent = () => {

    if(this.props.loading){
      return <Spinner/>
    }

    if(this.props.error){
      return <Fatal message={ this.props.error }/>;
    }

    return <Table/>;
  }

  
  
  render() {
    return(
      <div>
        <h1>Usuarios</h1>
        { this.loadContent() }
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect( mapStateToProps, usersActions ) (Users);