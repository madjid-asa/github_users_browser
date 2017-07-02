import React, { Component } from 'react';
import {connect} from 'react-redux';  
import { Col, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import SearchInput, {createFilter} from 'react-search-input'
import {viewUserDetail, searchUsers} from '../actions/userActions'

const KEYS_TO_FILTERS = ['login']

class UsersList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  searchUpdated (term) {
    if(term.length > 2){
      this.props.searchUsers(term);
    }
    this.setState({searchTerm: term});
  }


  render() {
    const filteredUsers = this.props.users.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    const users = filteredUsers.map(user => {
                  return (
                    <ListGroupItem key={user.id} onClick={()=>this.props.viewUserDetail(user.login)}>{user.login}</ListGroupItem>
                  )
                });
    return (
        <Col xs={this.props.xs} md={this.props.md}>
            <Form inline>
              <SearchInput className="input-group search-input" inputClassName="form-control" onChange={this.searchUpdated} />
            </Form>
            <ListGroup>
                {users}
            </ListGroup>
        </Col>
    )
  }
}
const mapStateToProps = (state, ownProps) => {  
  // state = {users: [{id:1, login: "Maru"}, etc.]}
  return {
    users: state.users.users
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchUsers : (login) => {
      dispatch(searchUsers(login));
    },
    viewUserDetail: (id) => {
      dispatch(viewUserDetail(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList)