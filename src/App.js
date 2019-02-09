import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Messages from './components/Messages';
import Groups from './components/Groups';
import Header from './components/layout/Header';
import Modal from './components/Modal';
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
        },
        {
          id: uuid.v4(),
          username: 'Steven',
          date: '12/apr/2018',
          body: 'what up',
          key: 'friend',
        },
        {
          id: 3,
          username: 'Gregory',
          date: '12/apr/2018',
          body: 'Hey',
          key: 'self',
        }
      ],

      groups: [
        {
          id: 1,
          name: 'Group Dynamite',
          photo: ''
        },
        {
          id: 2,
          name: 'Los cuchifritos',
          photo: ''
        },
        {
          id: 3,
          name: 'The fi',
          photo: ''
        }
    ],
    show: false
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


      openModalHandler = () => {
          this.setState({
              isShowing: true
          });
      }

      closeModalHandler = () => {
          this.setState({
              isShowing: false
          });
      }

  render() {
    return (
      <Router>
      <div className="mainContainer">
          <div>
        <NavMenu onClick={this.handleShow} />
        <Header />
          </div>
        <div className="bodyContainer">
        <div className="sideBarContainer">
          <div className= "d-flex flex-row">  { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
              <label className="add-group-label"> Add A Group </label>
              <button className="btn btn-modal" onClick={this.openModalHandler}> + </button>

                  <Modal
                      className="modal"
                      show={this.state.isShowing}
                      close={this.closeModalHandler}>
                      Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                  </Modal>

          </div>
          <Groups groups={this.state.groups} />
        </div>
        <div className="MessageContainer">
          <Route exact path="/" render={ props => (
            <React.Fragment>
              <div className= "d-flex align-items-start flex-column bd-highlight mb-3" style={{ height: '500px', width: '100%'}}>
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
      </div>
      </Router>
    );
  }
}

export default App;
