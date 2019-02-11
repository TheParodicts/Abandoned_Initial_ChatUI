import React, {Component} from 'react'
import NewUserForm from './NewUserForm'


class CreateUser extends Component{
  constructor (props, context){
    super(props, context);
  }

render(){return (
      <React.Fragment>
        <div>
          <h1 className='loginHeader'>Create a new Account </h1>
        </div>
        <div>
          <NewUserForm onCreateUser = {this.props.onCreateUser}
           loginPath={this.props.loginPath}/>
        </div>
      </React.Fragment>)
  }
}
export default CreateUser;
