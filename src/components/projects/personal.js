import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import ProjectBox from './projectbox'
import {FEProjectData} from '../../data/projects'

export default class FEProjects extends Component {
  render(){
    let style = {
      height: '80%',
      width: '80%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
    let boxStyle = {
      height: '35%',
      width: '22.5%',
      margin: '0 .75%',
      padding: '0 .75%',
      borderRadius: '5px',
    }
    const projectBoxes = []
    for(let p in FEProjectData){
      let project = FEProjectData[p]
      projectBoxes.push(
        <div style={boxStyle} key={project.title}>
          <Link to={`/${project.title}`}>
            <ProjectBox name={project.title} info={project.info}/>
          </Link>
        </div>
      )
    }
    return(
      <div className='content-wrapper' style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={style}>
          {projectBoxes}
        </div>
      </div>
    )
  }
}
