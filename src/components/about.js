import React, {Component} from 'react'

import mb from '../images/techmb.jpg'
import code from '../images/htmlcode.jpeg'

export default class About extends Component {
  render(){
    return(
      <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div id='about-wrapper' style={{height: '95%', width: '90%'}}>

          <div className='about-line'>

            <div style={{borderRadius: '15px', boxShadow: '0 0 0px 2px #666666, 0 0 0px 6px #888'}}>
              <img src={mb} style={{width: '100%'}} alt='Computer Motherboard'/>
            </div>

            <div className='about-textbox' style={{padding: '15px', backgroundColor: 'grey', borderRadius: '15px', boxShadow: '0 0 0px 2px #666, 0 0 0px 6px #888'}}>
              <h3>Work History</h3>
              <p>My current position is as a technologist for a school district where I have been for the past 4 years. Previous to this I have also worked 4 years with another district as well as half a year as technical support for a communications company and a full year as a sales associate for Walmart</p>
              <br/>
              <p>In my current position I work with a team to support the staff through completing technology requests as they are submitted. We regularly rotate between working as teams and being solo on various tasks between our seven different locations.</p>
            </div>

          </div>

          <div className='about-line'>

            <div style={{borderRadius: '15px', boxShadow: '0 0 0px 2px #666, 0 0 0px 6px #888'}}>
              <img src={code} style={{width: '100%'}} alt='html code'/>
            </div>

            <div className='about-textbox'>
              <h3>Current Studies</h3>
              <p>I have been actively working on learning software development since December of 2016, I had small amounts of experience before this through a couple of courses in college.</p>
              <br/>
              <p>I have currently completed Free Code Camp's Frontend certification as well as some of their backend projects while also going through various other coding websites such as Codecademy, Lynda and a Udemy course. I’ve learned to build general HTML pages and style them with CSS, Bootstrap and Sass. I’ve also learned a lot about Javascript and this is where I truly enjoy the process of web development. Most of my time has been spent practicing with the React framework and creating various single page applications to test ideas, including this portfolio website!</p>
              <br/>
              <p>Currently learning more about running my own database servers (using Mongodb primarily, but familiar with some SQL) and creating Express / Node.js server.</p>

            </div>

          </div>
        </div>
      </div>
    )
  }
}
