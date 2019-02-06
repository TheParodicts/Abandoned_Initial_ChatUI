import React, { Component } from 'react';

class DropDown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listOpen: false,
      headerTitle: this.props.username
    };
    this.close = this.close.bind(this)
  }

  componentDidUpdate(){
    const { listOpen } = this.state
    setTimeout(() => {
      if(listOpen){
        window.addEventListener('click', this.close)
      }
      else{
        window.removeEventListener('click', this.close)
      }
    }, 0)
}

  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.close)
  }

  close(timeOut){
    this.setState({
      listOpen: false
    })
}

selectItem(username, id, stateKey){
  this.setState({
    headerTitle: username,
    listOpen: false
  }, this.props.resetThenSet(id, stateKey))
}

  toggleList(){
    this.setState( prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {

      const{ username } = this.props
      const{ listOpen, headerTitle } = this.state

      return (
        <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
            {listOpen
              ? <i className="fa-angle-up" size="2x"/>
              : <i className="fa-angle-down" size="2x"/>
            }
        </div>
       {listOpen && <ul className="dd-list" onClick={e => e.stopPropagation()}>
         {this.props.messages.map.map((item) => (
           <li className="dd-list-item" key={item.title} onClick={() => this.selectItem(item.title, item.id, item.key)}>
             {item.title} {item.selected && <i className="check"/>}
           </li>
          ))}
          </ul>}
        </div>
      )
  }
}

export default DropDown;
