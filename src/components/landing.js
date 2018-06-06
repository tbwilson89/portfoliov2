import React, {Component} from 'react'
import {Link} from 'react-router-dom'

//THIS WAS BUILT WHEN ATTEMPTING NOT TO USE A TOP NAV BAR

export default class Landing extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
  }

  render(){
    return(
      <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div id='landing-content' style={{backgroundColor: 'grey',border: '4px solid black', borderRadius: '5px', padding: '10px', boxShadow: '0 0 2px black'}}>
          <div id='landing-title' style={{alignSelf: 'center', marginBottom: '15px'}}>
            <h2>Trevor Wilson</h2>
            <h3>Web Developer - Computer Technician</h3>
          </div>
          <div id='landing-links'>
            <Link to='/about'>&lt; About <span id='closing-tag'>/</span>&gt;</Link>
            <Link to='/projects'>&lt; Projects <span id='closing-tag'>/</span>&gt;</Link>
            <Link to='/social'>&lt; Social Media <span id='closing-tag'>/</span>&gt;</Link>
            <Link to='/contact'>&lt; Contact <span id='closing-tag'>/</span>&gt;</Link>
          </div>
        </div>
      </div>
    )
  }
}
