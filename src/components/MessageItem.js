import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MessageItem extends Component{
  getStyle = () => {
    return {
      background: this.props.message.id === 3 ?
      '#deb887':'#87ceeb',
      borderRadius: this.props.message.id === 3 ? '50px 15px 5px 30px': '15px 50px 30px 5px',
      marginBottom: '10px',
      marginRight: '10px',
      textAlign: this.props.message.id === 3 ? 'right':'left',
      }
    }

    titleStyle = () => {
      return {
        color: 'white',
        padding: '2px',
        borderRadius: this.props.message.id === 3 ? '50px 15px 5px 10px': '15px 50px 10px 5px',
        marginRight: '10px',
        marginLeft: '10px',
        marginBottom: '5px'
        }
      }

    bodyStyle = () =>{
      return {
        color: 'black',
        padding: '2px',
        marginRight: '10px',
        marginLeft: '10px',
        fontSize: '20px',
        marginTop: '5px',
        marginBottom: '5px'
      }
    }

  render() {
    const {id, username, body} = this.props.message;
    return (
      <div style={this.getStyle()}>
        <p style={this.titleStyle() }>
        { username + ': ' }
        </p>
        <p style={ this.bodyStyle() }>
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
