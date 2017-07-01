import React, { Component } from 'react';
import {connect} from 'react-redux';  
import {Panel, Col, Row, Image, ListGroup, ListGroupItem } from 'react-bootstrap';


class UserDetail extends Component {

  render() {
    const repos = this.props.repos.map( repo => <ListGroupItem key={repo.id}>{repo.name}</ListGroupItem>);
    return (
      <Col xs={this.props.xs} md={this.props.md}>
        <Panel header={this.props.currentUser.login} bsStyle="primary">
          <Row className="show-grid">
            <Col xs={4} md={4}>
              <Image src={this.props.currentUser.avatar_url} thumbnail />
            </Col>
            <Col xs={8} md={8}>
            <ListGroup>
              <ListGroupItem header="Name">{this.props.currentUser.name}</ListGroupItem>
              <ListGroupItem header="Blog" href={this.props.currentUser.blog}>{this.props.currentUser.blog}</ListGroupItem>
              <ListGroupItem header="Email">{this.props.currentUser.email}</ListGroupItem>
            </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col xs={8} md={8}>
              <h3>Repositories</h3>
              <ListGroup>
                {repos}
              </ListGroup>
            </Col>
          </Row>
        </Panel>
      </Col>
    )
  }
}
const mapStateToProps = (state, props) => {  
  // state = {users: [{id:1, login: "Maru"}, etc.]}
  return {
    currentUser: state.users.currentUser.user,
    repos: state.users.currentUser.repos
  };
}
export default connect(mapStateToProps)(UserDetail)