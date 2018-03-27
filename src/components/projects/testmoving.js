import React, {Component} from 'react'

import cardInfo from './cardgame/database/cardinfo'
import Card from './cardgame/card'

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
      showHand: false,
      playerDeck: []
    }
    this.drag = this.drag.bind(this)
    this.allowDrop = this.allowDrop.bind(this)
    this.drop = this.drop.bind(this)
    this.showHand = this.showHand.bind(this)
    this.drawCard = this.drawCard.bind(this)
  }

  drawCard(){
    document.getElementById('player-hand').appendChild(document.getElementById('player-deck').children[0])
    console.log(this.state.playerDeck)
  }
  showHand(){
    this.setState({showHand: true})
  }

  allowDrop(e){
    e.preventDefault()
  }
  drag(e){
    console.log('test')
    e.dataTransfer.setData('text', e.currentTarget.id)
  }
  drop(e){
    e.preventDefault()
    console.log(e.dataTransfer.getData('test'))
    var data = e.dataTransfer.getData('text')
    e.currentTarget.appendChild(document.getElementById(data))
  }

  componentDidMount(){
    console.log(document.getElementById('player-deck').children[0])
    let deck = []
    for(let i=0;i<30;i++){
      deck.push(<div id={`card${i}`} draggable='true' onDragStart={this.drag} style={{}}><Card loc={`card${i}`} cardSize={''} cardData={cardInfo.fighter} onClick={function(){}} onHover={function(){}}/></div>)
    }
    this.setState({
      playerDeck: deck
    })
  }

  render(){
    // let secOne = this.state.sectionOne.map((s,i)=>{
    //   return (
    //     <div
    //       id={`sectionOne${i}`}
    //       className='square'
    //       // onMouseMove={this.whenMouseMove}
    //       style={{
    //         height: '100px',
    //         width: '100px',
    //         backgroundColor: 'blue',
    //         position: this.state.sectionOne[i].dragging ? 'absolute' : 'inline',
    //         top:  this.state.sectionOne[i].y,
    //         left: this.state.sectionOne[i].x
    //       }}
    //       ></div>
    //   )
    // })
    // let secTwo = this.state.sectionOne.map((i)=>(<div id={`sectwo${i}`} className='square' style={{height: '100px', width: '100px',backgroundColor: 'blue'}} onClick={this.dragElement}></div>))
    return(
        <div className='wrapper'
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1.25fr 2fr 2fr 1.25fr',
            gridTemplateAreas: "'oresources oresources' 'oattack odefense''pdefense pattack' 'presources presources'",
            gridGap: '1em',
            padding: '1em 1em 2em 1em',
            overflow: 'hidden',
          }}>
          <div className='opponent-resources' style={{backgroundColor: '#0e0', gridArea: 'oresources', display: 'grid'}} onDrop={this.drop} onDragOver={this.allowDrop}></div>
          <div className='opponent-defense' style={{backgroundColor: '#00e', gridArea: 'odefense', display: 'flex', flexWrap: 'wrap'}} onDrop={this.drop} onDragOver={this.allowDrop}></div>
          <div className='opponent-attack' style={{backgroundColor: '#e00', gridArea: 'oattack', display: 'flex', flexWrap: 'wrap'}} onDrop={this.drop} onDragOver={this.allowDrop}></div>

          <div className='player-attack' style={{backgroundColor: '#e00', gridArea: 'pattack', display: 'flex', flexWrap: 'wrap'}} onDrop={this.drop} onDragOver={this.allowDrop}></div>
          <div className='player-defense' style={{backgroundColor: '#00e', gridArea: 'pdefense', display: 'flex', flexWrap: 'wrap'}} onDrop={this.drop} onDragOver={this.allowDrop}></div>
          <div className='player-resources' style={{backgroundColor: '#0e0', gridArea: 'presources', display: 'flex', flexWrap: 'wrap'}} onDrop={this.drop} onDragOver={this.allowDrop}></div>

          <div
            id='player-hand'
            className='player-hand'
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: this.state.showHand === true ? '150px' : '-75px',
              width: '100%',
              height: '100px',
              backgroundColor: '#eee',
              transition: 'bottom .5s'
            }}
            onClick={this.showHand}>
            <button onClick={this.drawCard}>DRAW A CARD!</button>

          </div>

          <div id='player-deck' className='player-deck' style={{display: 'none'}}>
            {this.state.playerDeck}
          </div>


          {/* <div className='sectionOne'>{secOne}</div>
          <div className='sectionTwo'>{}</div>
          <div style={{height: '150px', width: '150px', border: '1px solid black'}} onDrop={this.drop} onDragOver={this.allowDrop}></div>
          <div style={{height: '150px', width: '150px', border: '1px solid black'}} onDrop={this.drop} onDragOver={this.allowDrop}></div>

          <div
          id='testmover'
          draggable='true'
          onDragStart={this.drag}
          style={{minHeight: '100px', minWidth: '100px', backgroundColor: 'red'}}
          >

        </div>
        <div
        id='testmover2'
        draggable='true'
        onDragStart={this.drag}
        style={{height: '100px', width: '100px', backgroundColor: 'green'}}
        >

      </div> */}
      </div>
    )
  }
}
