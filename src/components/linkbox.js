import React, {Component} from 'react'

export default class Linkbox extends Component {
  render(){
    return(
      <div className='linkbox-wrapper' onClick={() => this.props.handleClick(this.props.name)} style={{
        backgroundColor: 'slateGrey',
        transition: 'ease-in-out 5s',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '0 5px',
        minWidth: '200px',
        boxShadow: '0 0 5px 1px black',
        cursor: 'pointer'
      }}>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
