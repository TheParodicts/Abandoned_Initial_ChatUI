import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddMessage extends Component {
  state = {
    body: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addMessage(this.state.body);
    this.setState({ body: ''});
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  typeMessageStyle = () =>{
    return {
      flex:'10',
      padding:'5px',
      overflowX:'auto',
      width:'100%',
      border: "2px solid #eee",
      resize: "none",
      height:"50px"
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <textarea
        type="text" name="body"
        placeholder="Add Message..."
        value={this.state.body}
        onChange={this.onChange}
        style={this.typeMessageStyle()}/>

        <input
        type="submit"
        value="submit"
        className="btn"
        style={{ flex:'1' }} />

      </form>
    )
  }
}

// PropTypes
AddMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
}

export default AddMessage
