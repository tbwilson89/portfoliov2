import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import landing from './components/landing'
import projects from './components/projects/projects'
import about from './components/about'
import social from './components/social'
import contact from './components/contact'


export default class Redirects extends Component {
  render(){
    return(
      <Router>
        <div className='App'>

           <div className='wrapper'>

             <nav>
               <div id='left-nav-container'>
                 <Link to='/'><div className='nav-link-btn'>Home</div></Link>
               </div>
               <div id='right-nav-container'>
                 <ul className='right-nav-link-list'>
                   <div className='nav-hover-wrapper'>
                     <div className='nav-hover-link'>
                       <Link to='/projects'><li className='nav-link-btn'>Projects</li></Link>
                     </div>
                     <div className='nav-hover-content'>
                       <ul>
                         <li>
                           <Link to='/projects/frontend'>
                             <span className='dropdown-section-title'>
                               <i className='fab fa-codepen'></i>
                               <h4>Frontend Projects</h4>
                             </span>
                             <p>&emsp; Projects focusing on the frontend worked on through Free Code Camp and various other tutorial websites.</p>
                           </Link>
                         </li>
                         <li>
                           <Link to='/projects/backend'>
                             <span className='dropdown-section-title'>
                               <i className='fab fa-codepen'></i>
                               <h4>Backend Projects</h4>
                             </span>
                             <p>&emsp; Projects focusing on the backend worked on through Free Code Camp and various other tutorial websites.</p>
                           </Link>
                         </li>
                         <li>
                           <Link to='/projects/personal'>
                             <span className='dropdown-section-title'>
                               <i className='fab fa-codepen'></i>
                               <h4>Personal Projects</h4>
                             </span>
                             <p>&emsp; Personal projects that I've worked on simply for enjoyment and learning.</p>
                           </Link>
                         </li>
                       </ul>
                     </div>
                   </div>
                   <Link to='/about'><li className='nav-link-btn'>About</li></Link>
                   <Link to='/social'><li className='nav-link-btn'>Social Media</li></Link>
                   <Link to='/contact'><li className='nav-link-btn'>Contact</li></Link>
                 </ul>
               </div>
             </nav>

             <section className='main-content'>
               <Route exact path='/' component={landing} />
               <Route path='/projects' component={projects} />
               <Route path='/about' component={about} />
               <Route path='/social' component={social} />
               <Route path='/contact' component={contact} />
               {/* <Route path='' component={} /> */}
             </section>

           </div>
        </div>
      </Router>
    )
  }
}
