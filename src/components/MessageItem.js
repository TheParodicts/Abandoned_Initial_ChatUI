import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MessageItem extends Component{
  getStyle = () => {
    return {
      background: this.props.message.id === 3 ?
      '#deb887':'#87ceeb',
      padding: '5px',
      borderBottom: 'none',
      borderRadius: this.props.message.id === 3 ? '50px 15px 5px 30px': '15px 50px 30px 5px',
      marginBottom: '10px',
      marginRight: '10px',
      textAlign: this.props.message.id === 3 ? 'right':'left'
      }
    }

    titleStyle = () => {
      return {
        color: 'white',
        padding: '2px',
        borderBottom: 'none',
        borderRadius: this.props.message.id === 3 ? '50px 15px 5px 10px': '15px 50px 10px 5px',
        }
      }

  render() {
    const {id, username, body} = this.props.message;
    return (
      <div style={this.getStyle()}>
      <p>
        {'  '}
        <p style={this.titleStyle() }>
        { username + ': ' }<br />
        </p>
        { body }
      </p>
      </div>
    )
  }
}

// PropTypes
MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default MessageItem;
