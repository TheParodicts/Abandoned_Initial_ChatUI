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

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
        type="text" name="body"
        placeholder="Add Message..."
        value={this.state.body}
        onChange={this.onChange}
        style={{ flex:'10', padding:'5px' }}/>

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
