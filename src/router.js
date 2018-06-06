import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import landing from './components/landing'
import projects from './components/projects/projects'
import feprojects from './components/projects/frontend'
import beprojects from './components/projects/backend'
import personalprojects from './components/projects/personal'
import projectdisplay from './components/projects/projectdisplay'
import about from './components/about'
import social from './components/social'
import contact from './components/contact'

import card from './components/projects/cardgame/card'
import GameBoard from './components/projects/cardgame/gameboard'
import testmove from './components/projects/testmoving'

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
                   <Link to='/about'><li className='nav-link-btn'>About</li></Link>
                   <div className='nav-hover-wrapper'>
                     <div className='nav-hover-link'>
                       <Link to='/projects'><li className='nav-link-btn'>Projects</li></Link>
                     </div>
                     <div className='nav-hover-content' style={{marginTop: '15px'}}>
                       <ul>
                         <Link to='/projects/frontend'>
                           <li>
                             <span className='dropdown-section-title'>
                               <h4><i className='fa fa-codepen'></i> Frontend Projects</h4>
                             </span>
                             <p>&emsp; Projects focusing on the frontend worked on through Free Code Camp and various other tutorial websites.</p>
                           </li>
                         </Link>
                         <Link to='/projects/backend'>
                          <li>
                             <span className='dropdown-section-title'>
                               <h4><i className='fa fa-codepen'></i> Backend Projects</h4>
                             </span>
                             <p>&emsp; Projects focusing on the backend worked on through Free Code Camp and various other tutorial websites.</p>
                           </li>
                         </Link>
                         <Link to='/projects/personal'>
                           <li>
                             <span className='dropdown-section-title'>
                               <h4><i className='fa fa-codepen'></i> Personal Projects</h4>
                             </span>
                             <p>&emsp; Personal projects that I've worked on simply for enjoyment and learning.</p>
                           </li>
                         </Link>
                       </ul>
                     </div>
                   </div>

                   <Link to='/social'><li className='nav-link-btn'>Social Media</li></Link>
                   <Link to='/contact'><li className='nav-link-btn'>Contact</li></Link>
                 </ul>
               </div>
             </nav>

             <section className='main-content'>
               <Route exact path='/' component={landing} />
               <Route exact path='/projects' component={projects} />
               <Route exact path='/projects/frontend' component={feprojects} />
               <Route exact path='/projects/backend' component={beprojects} />
               <Route exact path='/projects/personal' component={personalprojects} />
               <Route path='/projects/backend/:project' component={projectdisplay} />
               <Route path='/projects/frontend/:project' component={projectdisplay} />
               <Route path='/about' component={about} />
               <Route path='/social' component={social} />
               <Route path='/contact' component={contact} />
               <Route path='/card' component={card} />
               <Route path='/gameboard' component={GameBoard} />
               <Route path='/testmove' component={testmove} />
             </section>

           </div>
        </div>
      </Router>
    )
  }
}
