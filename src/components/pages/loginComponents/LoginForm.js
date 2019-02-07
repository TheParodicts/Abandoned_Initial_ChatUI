import React, { Component } from 'react';

class LoginForm extends Component {

state = {
  username: '',
  password: ''
}

onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {return(
      <form className = 'submitForm'
      onSubmit={this.onSubmit} >
        <div>
          <input className="loginField"
          type="text" name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.onChange}
          />
        </div>
        <div>
           <input className="loginField"
           type="password" name="password"
           placeholder="Password"
           value={this.state.password}
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
    )
  }
}

// PropTypes



export default LoginForm;
