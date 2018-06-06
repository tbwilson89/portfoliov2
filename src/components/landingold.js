import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Linkbox from './linkbox'

//THIS WAS BUILT WHEN ATTEMPTING NOT TO USE A TOP NAV BAR

export default class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentFull: '',
      left: 500,
      top: 500,
      offsetWidth: 10
    }
    this.makeFull = this.makeFull.bind(this)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  componentDidMount(){
    this.updateWindowDimensions()
    console.log(window.history.state)
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  updateWindowDimensions(){
    this.setState({top: window.innerHeight / 2, left: window.innerWidth / 2})
  }

  makeFull(page){
    console.log('works! ' + page)
    document.getElementById('linkbox-wrap').classList.add('transform')
    this.setState({
      currentFull: page
    })
  }

  render(){
    return(
      <div id='testing' style={{
        height: '100vh',
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
        <div id='linkbox-wrap' className='linkbox-wrapper' style={{
          visibility: this.state.currentFull === '' ? 'visible' : 'hidden',
          opacity: this.state.currentFull === '' ? 1 : 0,
          display: 'flex',
          position: 'absolute',
          top: this.state.top,
          left: this.state.left,
          transition: 'all .6s ease-in'
        }}>
          <Link to='/about'><Linkbox name='About' handleClick={this.makeFull} isFull={this.state.currentFull}/></Link>
          <Linkbox name='Projects' handleClick={this.makeFull} isFull={this.state.currentFull}/>
          <Linkbox name='Social Media' handleClick={this.makeFull} isFull={this.state.currentFull}/>
          <Linkbox name='Contact' handleClick={this.makeFull} isFull={this.state.currentFull}/>
        </div>
      </div>
    )
  }
}
