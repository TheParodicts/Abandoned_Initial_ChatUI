import React, {Component} from 'react'
import ResetPassForm from "./ResetPassForm"
import ResetHeader from './ResetHeader'


class ResetPassword extends Component{
  constructor (props, context){
    super(props, context);
  }

render(){return (
      <React.Fragment>
        <ResetHeader />
        <ResetPassForm onResetPassword = {this.props.onResetPassword}
         loginPath={this.props.loginPath}/>
      </React.Fragment>)
  }
}
export default ResetPassword;
