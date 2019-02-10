import { BrowserRouter as Router,Redirect, Route} from 'react-router-dom';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './CSS/Login.css';
import LoginForm from './loginComponents/LoginForm';
import ResetPassword from './loginComponents/ResetPassword'

const TESTCREDENTIALS={
  email:'brianrodrig@gmail.com',
  password:'manueldb'
}

const paths={
  loginPath:"/login",
  resetPassPath:"/ResetPassword"
}

class Login extends Component {
  constructor (props, context){
    super(props, context);


  }

  onLogin = (e, credentials) => {
    //TODO Add actual submit protocol and redirect
    if (credentials.username!==TESTCREDENTIALS.email){
      alert('Username not found. Please enter correct username or create an account.')
      return}

    if (credentials.password!==TESTCREDENTIALS.password){
      alert('Wrong password. Please input correct password.')
      return}

    alert('creds submitted: '+ (credentials.username+" "+credentials.password))
  }


  onResetPassword = (e, email) => {
    // TODO add Actual reset password functionality
    alert('Reset email sent to: '+ email)}


  render() {return(
    <Router>
      <div className="mainContainer">
          <Route path={paths.loginPath}render= {props =>(
          <React.Fragment>
            <h1 className="loginHeader">Login</h1>
            <div>
              <LoginForm onLogin={this.onLogin} creds={this.state}/>
            </div>
            <div>
              <Link to={paths.resetPassPath}>Forgot Password?</Link>
            </div>
          </React.Fragment>)}>
        </Route>
        <Route exact path={paths.resetPassPath} render = {props =>(
          <React.Fragment>
            <div>
              <ResetPassword onResetPassword= {this.onResetPassword}
               loginPath={paths.loginPath}/>
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
