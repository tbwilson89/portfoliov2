import React from 'react'
import {Link} from 'react-router-dom'

import ProjectBox from './projectbox'
// import {FEProjectData} from '../../data/projects'

const Projects = ({match}) => {
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
  // const projectBoxes = []
  // for(let p in FEProjectData){
  //   let project = FEProjectData[p]
  //   projectBoxes.push(
  //     <div style={boxStyle} key={project.title}>
  //       <Link to={`/${project.title}`}>
  //         <ProjectBox name={project.title} info={project.info}/>
  //       </Link>
  //     </div>
  //   )
    console.log(match)
    return(
      <div className='content-wrapper' style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={style}>
          <div style={boxStyle}>
            <Link to={`${match.path}/frontend`}>
              <ProjectBox name='Front End' info="Projects focusing on the frontend worked on through Free Code Camp and various other tutorial websites."/>
            </Link>
          </div>
          <div style={boxStyle}>
            <Link to={`${match.path}/backend`}>
              <ProjectBox name='Back End' info="Projects focusing on the backend worked on through Free Code Camp and various other tutorial websites."/>
            </Link>
          </div>
          <div style={boxStyle}>
            <Link to={`${match.path}/personal`}>
              <ProjectBox name='Personal Projects' info="Personal projects that I've been working on to learn and see what I can do without following a course or guide."/>
            </Link>
          </div>
        </div>
      </div>
    )
  // }
}

export default Projects
