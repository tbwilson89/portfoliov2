import React, {Component} from 'react'

export default class testMove extends Component {
  constructor(props){
    super(props)
    this.state = {
      sectionOne: [
        {
          dragging: false,
          x: 0,
          y: 0,
        },
        {
          dragging: false,
          x: 0,
          y: 0,
        }
      ],
      sectionTwo: ['square', 'square'],
      currentLoc: '',
      currentPos: '',
    }
    this.MouseDown = this.MouseDown.bind(this)
    this.whenMouseMove = this.whenMouseMove.bind(this)
    this.mouseUp = this.mouseUp.bind(this)
  }

  componentDidMount(){
    // this.state.sectionOne.forEach((s,i)=>{
    //   this.dragElement(`secone${i}}`)
    // })
  }
  MouseDown(e){
    let loc = e.currentTarget.id.split('').map((l)=>isNaN(l) ? l : '').join('')
    let pos = e.currentTarget.id.split('').map((l)=>isNaN(l) ? '' : l).join('')

    console.log(loc + ' ' + pos)
    let section = JSON.parse(JSON.stringify(this.state[loc]))
    section[pos].dragging = true
    section[pos].x = e.clientX
    section[pos].y = e.clientY

    console.log(section)
    this.setState({
      sectionOne: section,
      currentLoc: loc,
      currentPos: pos
    })
  }
  mouseUp(e){
    if(this.state.currentLoc !== ''){
      let section = JSON.parse(JSON.stringify(this.state[this.state.currentLoc]))
      section[this.state.currentPos].dragging = false;

      console.log(section)
      this.setState({
        sectionOne: section,
        currentLoc: '',
        currentPos: ''
      })

    }
  }
  mouseLeaves(e){

  }
  whenMouseMove(e){
    let posX = e.clientX
    let posY = e.clientY
    if(this.state.currentLoc !== ''){
      let currentTarget = JSON.parse(JSON.stringify(this.state[this.state.currentLoc]))
      currentTarget[this.state.currentPos].x = posX
      currentTarget[this.state.currentPos].y = posY
      console.log(posX + ' ' + posY)
      this.setState({
        sectionOne: currentTarget
      })
    }
  }

  render(){
    let secOne = this.state.sectionOne.map((s,i)=>{
      return (
        <div
          id={`sectionOne${i}`}
          className='square'
          onMouseDown={this.MouseDown}
          onMouseUp={this.mouseUp}
          // onMouseMove={this.whenMouseMove}
          style={{
            height: '100px',
            width: '100px',
            backgroundColor: 'blue',
            position: this.state.sectionOne[i].dragging ? 'absolute' : 'inline',
            top:  this.state.sectionOne[i].y,
            left: this.state.sectionOne[i].x
          }}
          ></div>
      )
    })
    // let secTwo = this.state.sectionOne.map((i)=>(<div id={`sectwo${i}`} className='square' style={{height: '100px', width: '100px',backgroundColor: 'blue'}} onClick={this.dragElement}></div>))
    return(
      <div className='wrapper' onMouseMove={this.whenMouseMove} onMouseLeave={this.mouseUp} onMouseUp={this.mouseUp}>
        <div className='sectionOne'>{secOne}</div>
        <div className='sectionTwo'>{}</div>
      </div>
    )
  }
}
