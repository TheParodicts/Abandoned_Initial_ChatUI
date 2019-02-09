import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export class GroupItem extends Component{
  getStyle = () => {
    return {
      background: '#fff',
      padding: '2px',
      borderRadius: '15px',
      marginBottom: '10px',
      marginRight: '10px',
      marginLeft: '10px',
      textAlign: 'left'
      }
    }

    iconStyle = () => {
      return {
        color: 'black',
        padding: '5px',
        padding: '10px'
        }
      }

  render() {
    const {id, name } = this.props.group;
    return (
      <div style={this.getStyle()}>
        <FontAwesomeIcon icon={faHome} size="2x"  />
        <label style={{padding: "10px", fontSize: "20px"}}>
          {'  '}
          { name }
        </label>
      </div>
    )
  }
}

// PropTypes
GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
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

export default GroupItem;
