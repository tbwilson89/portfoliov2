import React from 'react'

import {FEProjectData} from '../../data/projects'
import {BEProjectData} from '../../data/projects'


const ProjectDisplay = ({match}) => {
  let style = {
    margin: '10px 10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: '5px',
    boxShadow: '0px 2px 2px 1px black'
  }
  let project = match.url.includes('frontend') === true ? FEProjectData[match.params.project] : BEProjectData[match.params.project]
  // console.log(match.url.includes('frontend'))
  // let project = FEProjectData[match.params.project]
  console.log(project)
  return(
    <div className='content-wrapper' style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{height: '80%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img style={{height: '30%', width: '20%', marginRight: '10px', ...style}} alt={project.name} src={project.image}/>
        <div style={{height: '100%', width: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <div style={{height: '10%', ...style}}>
            <h1>{project.title}</h1>
          </div>
          <div style={{height: '10%', ...style}}>
            <p>
              {project.info}
            </p>
          </div>
          <div style={{height: '30%', ...style}}>
            <p>
              {project.learned}
            </p>
            <h5><a href={project.url}>-&gt;Check it out&lt;-</a></h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay
