import React, {Component} from 'react'

import Linkbox from './linkbox'

export default class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentFull: '',
      left: 500,
      top: 500
    }
    this.makeFull = this.makeFull.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentDidMount(){
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  updateWindowDimensions(){
    this.setState({top: window.innerHeight / 2, left: window.innerWidth / 2})
  }

  makeFull(page){
    console.log('works! ' + page)
    this.setState({
      currentFull: page
    })
  }

  render(){
    return(
      <div id='testing' style={{
        height: '93vh',
        display: 'relative'
      }}>
        <div className='home-btn' onClick={()=>this.makeFull('')} style={{
          visibility: this.state.currentFull === '' ? 'hidden' : 'visible',
          opacity: this.state.currentFull === '' ? 0 : 1,
          position: 'absolute',
          margin: '10px 10px',
          borderRadius: '5px',
          backgroundColor: 'slateGrey',
          fontSize: '2em',
          cursor: 'pointer',
          transition: 'visibility .4s linear, opacity .4s linear'
        }}>
          <i className='fa fa-home'></i>
        </div>
        <div className='linkbox-wrapper' style={{
          display: 'flex',
          position: 'absolute',
          top: this.state.currentFull !== '' ? '8vh' : this.state.top,
          // left: this.state.currentFull !== '' ? this.state.left * 1.45 : this.state.left,
          right: '0',
          transform: this.state.currentFull !== '' ? '' : 'translate(-50%,0)',
          transition: 'top .6s linear, left .6s linear, right .6s linear, transform .6s linear'
        }}>
          <Linkbox name='Projects' handleClick={this.makeFull} isFull={this.state.currentFull}/>
          <Linkbox name='About' handleClick={this.makeFull} isFull={this.state.currentFull}/>
          <Linkbox name='Social Media' handleClick={this.makeFull} isFull={this.state.currentFull}/>
          <Linkbox name='Contact' handleClick={this.makeFull} isFull={this.state.currentFull}/>
        </div>
      </div>
    )
  }
}
