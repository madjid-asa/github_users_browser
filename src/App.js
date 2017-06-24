import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';

const handleSelect = (selectedKey) => {
    alert('selected ' + selectedKey);
  };

  const navInstance = (
    <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
      <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
      <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
    </Nav>
  )

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Github user browser</h2>
        </div>
        <Grid className="App-content">
          <Row className="show-grid">
            <Col xs={4} md={4}>{navInstance}</Col>
            <Col xs={8} md={8}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
