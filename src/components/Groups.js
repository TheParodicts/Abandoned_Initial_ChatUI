import React, { Component } from 'react';
import GroupItem from './GroupItem';

class Groups extends Component {

  render() {
    return this.props.groups.map((group)=>(
      <GroupItem  key={group.id} group={group} />
    ));
  }
}

// PropTypes



export default Groups;
