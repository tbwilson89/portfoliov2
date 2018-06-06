import React from 'react'

const ProjectBox = ({name, info}) => {
  let style = {
    height: '100%',
    width: '100%',
    padding: '5%',
    borderRadius: '5px',
    boxShadow: '0px 2px 2px 1px black',
  }
  return(
    <div className='project-box' style={style}>
      <h3>{name}</h3>
      <hr style={{color: 'black', height: '1px', width: '90%', borderTop: '1px solid black'}}/>
      <p>{info}</p>
    </div>
  )
}

export default ProjectBox
