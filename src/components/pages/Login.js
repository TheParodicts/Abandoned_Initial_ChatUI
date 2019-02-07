import { BrowserRouter as Router, Route} from 'react-router-dom';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './CSS/Login.css';
import LoginForm from './loginComponents/LoginForm';
import ResetPassword from './loginComponents/ResetPassword'

class Login extends Component {

  render() {return(
    <Router>
      <div className="mainContainer">
        <Route path="/login" render= {props =>(
          <React.Fragment>
            <h1 className="loginHeader">Login</h1>
            <div>
              <LoginForm />
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
