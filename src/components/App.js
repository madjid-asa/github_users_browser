import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import UsersList from './UsersList';
import UserDetail from './UserDetail';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    var usersList = (this.props.usersLoad) ? <UsersList xs={4} md={4} /> : <Col xs={4} md={4}>Chargement encours</Col>;
    var user = (this.props.currentUser)? <UserDetail xs={8} md={8} /> : <Col xs={8} md={8}>Click on a user or search for one</Col>;
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Github user browser</h2>
        </div>
        <Grid className="App-content">
          <Row className="show-grid">
            {usersList}
            {user}
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    usersLoad: state.users.usersLoad,
    currentUser: state.users.currentUser
  };
}

export default connect(mapStateToProps) (App);