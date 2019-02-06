import React, { Component } from 'react';
import MessageItem from './MessageItem';

class Messages extends Component {

  render() {
    return this.props.messages.map((message)=>(
      <MessageItem  key={message.id} message={message} />
    ));
  }
}

// PropTypes



export default Messages;
