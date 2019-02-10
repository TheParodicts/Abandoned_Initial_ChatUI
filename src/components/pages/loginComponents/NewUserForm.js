import React, { Component } from 'react';
import {Router, Redirect} from 'react-router'

class NewUserForm extends Component {

  state = {
    email: '',
    username:'',
    first_name:'',
    last_name:'',
    password:'',
    confirmPswd:'',
    submitted: false,
    confirmMSG:''
}


onChange = (e) => {
  this.setState({[e.target.name]: e.target.value})
}


onSubmit = (e) => {
  if(this.state.email===''||this.state.username===''||
  this.state.first_name===''||this.state.last_name===''||
  this.state.password===''||this.state.confirmPswd===''){
    alert('There are empty fields. Please fill them in.')

  }
  else if(this.state.password!==this.state.confirmPswd){
    alert('Passwords do not match.')

  }
else{
    this.setState({submitted:true})
    e.preventDefault()
    this.props.onCreateUser(e, this.state)
    this.setState({submitted:true})
    }
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
          placeholder="Enter an E-mail address."
          value={this.state.email}
          onChange={this.onChange}
          />
        </div>
        <div>
          <input className="loginField"
          type="text" name="username"
          placeholder="Enter a Username"
          value={this.state.username}
          onChange={this.onChange}
          />
        </div>
        <div>
          <input className="loginField"
          type="text" name="first_name"
          placeholder="First Name"
          value={this.state.first_name}
          onChange={this.onChange}
          />
        </div>
        <div>
          <input className="loginField"
          type="text" name="last_name"
          placeholder="Last Name"
          value={this.state.last_name}
          onChange={this.onChange}
          />
        </div>
        <div>
          <input className="loginField"
          type="password" name="password"
          placeholder="Create a password"
          value={this.state.password}
          onChange={this.onChange}
          />
        </div>
        <div>
          <input className="loginField"
          type="password" name="confirmPswd"
          placeholder="Confirm password"
          value={this.state.confirmPswd}
          onChange={this.onChange}
          /><p>{this.state.confirmMSG}</p>
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

export default NewUserForm;
