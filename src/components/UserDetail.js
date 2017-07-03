import React, { Component } from 'react';
import {connect} from 'react-redux';  
import {Panel, Col, Row, Image, ListGroup, ListGroupItem } from 'react-bootstrap';


class UserDetail extends Component {
  render() {
    const msgDontFound = "Sorry, we don't have this information yet";
    const name = this.props.currentUser.name ? this.props.currentUser.name : msgDontFound; 
    const blog = this.props.currentUser.blog ? this.props.currentUser.blog : msgDontFound; 
    
    const repos = this.props.repos.map( repo => <ListGroupItem href={repo.html_url} target="_blank" key={repo.id}>{repo.name}</ListGroupItem>);
    return (
      <Col xs={this.props.xs} md={this.props.md}>
        <Panel header={this.props.currentUser.login} bsStyle="primary">
          <Row className="show-grid">
            <Col xs={4} md={4}>
              <Image src={this.props.currentUser.avatar_url} thumbnail />
            </Col>
            <Col xs={8} md={8}>
              <ListGroup>
                <ListGroupItem header="Name">{name}</ListGroupItem>
                <ListGroupItem header="Blog" target="_blank" href={this.props.currentUser.blog}>{blog}</ListGroupItem>
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