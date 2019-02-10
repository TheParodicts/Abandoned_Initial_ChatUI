import React, { Component } from 'react';
import {Router, Redirect} from 'react-router'

class ResetPassForm extends Component {

  state = {
  email: '',
  submitted: false
}

onChange = (e) => this.setState(
  {[e.target.name]: e.target.value});

onSubmit = (e) => {
  this.setState({submitted:true})
  e.preventDefault()
  this.props.onResetPassword(e, this.state.email)
  this.setState({submitted:true})
}

render() {
  if (this.state.submitted){
    return(<Redirect to={this.props.loginPath}/>)
  }

  return (
  <React.Fragment>
      <form className = 'submitForm'
      onSubmit={this.onSubmit} >
        <div>
          <input className="loginField"
          type="text" name="email"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.onChange}
          />
        </div>
        <div>
           <input
           type="submit"
           value="submit"
           className="loginBtn"
          />
      </div>
    </form>
  </React.Fragment>
    )
  }
}

export default ResetPassForm;
