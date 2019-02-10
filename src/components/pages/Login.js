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

onLogin = (e, credentials) => {
  //TODO Add actual submit protocol

  alert('creds submitted: '+ (credentials.username+" "+credentials.password))
}


onResetPassword = (e, email) => {
  // TODO add Actual reset password functionality
  alert('Reset email sent to: '+ email)

}

  render() {return(
    <Router>
      <div className="mainContainer">
        <Route path="/login" render= {props =>(
          <React.Fragment>
            <h1 className="loginHeader">Login</h1>
            <div>
              <LoginForm onLogin={this.onLogin} creds={this.state}/>
            </div>
            <div>
              <Link to="/ResetPassword">Forgot Password?</Link>
            </div>
          </React.Fragment>)}>
        </Route>
        <Route exact path="/ResetPassword" render = {props =>(
          <React.Fragment>
            <div>
              <ResetPassword onResetPassword= {this.onResetPassword}/>
            </div>
          </React.Fragment>)}>
        </Route>
      </div>
    </Router>
    )
  }
}
// PropTypes



export default Login;
