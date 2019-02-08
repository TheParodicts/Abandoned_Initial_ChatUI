import { BrowserRouter as Router, Route} from 'react-router-dom';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './CSS/Login.css';
import LoginForm from './loginComponents/LoginForm';
import ResetPassword from './loginComponents/ResetPassword'

class Login extends Component {
constructor (props, context){
  super(props, context);
}

onSubmit = (e, credentials) => {
  //TODO Add actual submit protocol

  alert('creds submitted: '+ (credentials.username+" "+credentials.password))
}

  render() {return(
    <Router>
      <div className="mainContainer">
        <Route path="/login" render= {props =>(
          <React.Fragment>
            <h1 className="loginHeader">Login</h1>
            <div>
              <LoginForm onSubmit={this.onSubmit} creds={this.state}/>
            </div>
            <div>
              <Link to="/ResetPassword">Forgot Password?</Link>
            </div>
          </React.Fragment>)}>
        </Route>
        <Route exact path="/ResetPassword"
        component = {ResetPassword}/>
      </div>
    </Router>
    )
  }
}
// PropTypes



export default Login;
