import React, { Component } from 'react';

class ResetPassForm extends Component {

  state = {
  email: ''
}

onChange = (e) => this.setState(
  {[e.target.name]: e.target.value});

render() {return (
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
