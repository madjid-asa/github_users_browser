import React, { Component } from 'react';
import {connect} from 'react-redux';  
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import SearchInput, {createFilter} from 'react-search-input'
// import users from '../users'
import {viewUserDetail} from '../actions/userActions'

const KEYS_TO_FILTERS = ['login']

class UsersList extends Component {
  
  constructor(props) {
    super(props);

    this.searchUpdated = this.searchUpdated.bind(this);

    this.state = {
      searchTerm: ''
    }
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  getFunctionItem (login) {
    return (login) =>{
        return this.props.viewUserDetail(login);
    }
  }
  render() {
    const filteredUsers = this.props.users.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    return (
        <Col xs={this.props.xs} md={this.props.md}>
            <SearchInput className="input-group search-input" inputClassName="form-control" onChange={this.searchUpdated} />
            <ListGroup>
                {filteredUsers.map(user => {
                  return (
                    <ListGroupItem key={user.id} onClick={()=>this.props.viewUserDetail(user.login)}>{user.login}</ListGroupItem>
                  )
                })}
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
    viewUserDetail: (id) => {
        console.log(id);
      dispatch(viewUserDetail(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList)