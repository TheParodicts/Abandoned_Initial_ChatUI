import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Messages from './components/Messages';
import Header from './components/layout/Header';
import AddMessage from './components/AddMessage';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import NavMenu from './components/NavMenu';
import DropDown from './components/DropDown';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      messages: [
        {
          id: uuid.v4(),
          username: 'Carlos',
          date: '12/apr/2018',
          body: 'Hey there',
          key: 'friend',
          show: false
        },
        {
          id: uuid.v4(),
          username: 'Steven',
          date: '12/apr/2018',
          body: 'what up',
          key: 'friend',
          show: false
        },
        {
          id: 3,
          username: 'Gregory',
          date: '12/apr/2018',
          body: 'Hey',
          key: 'self',
          show: false
        }
      ],
      searchText: '',
      searchResult: [],
      contactList: [],
    }
  }

  // Add Todo
  addMessage = (body) => {
    const newMessage = {
      id: 3,
      username: 'Gregory',
      date: '12/apr/2018',
      body
    }
    this.setState({ messages: [...this.state.messages, newMessage]})
  }

  handleClose() {
   this.setState({ show: false });
 }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Router>
      <div className="mainContainer">
          <div>
        <NavMenu onClick={this.handleShow} />
        <Header />
          </div>
        <div className="container">
        <Route exact path="/" render={ props => (
          <React.Fragment>

          <div style={{ height: '500px' }}>
            <Messages messages={this.state.messages} />
          </div>

          <div>
            <AddMessage addMessage={this.addMessage} />
          </div>
          </React.Fragment>
         )} />
         <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
