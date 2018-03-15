import React, {Component} from 'react'

import '../../../styles/css/gameboard.css'

import shadowFace from './images/shadowface.jpg'
import fighterImage from './images/fighter.png'

import Card from './card'

export default class GameBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerHealth: 20,
      playerDeck: [],
      playerHand: [
        {
          name: 'Fighter',
          cost: '2',
          devotion: {
            fire: 2,
            earth: 2,
            wind: 2,
            electric: 2,
            void: 2,
            aether: 2,
            light: 2,
            dark: 2,
            water: 2,
            ice: 2
          },
          cardType: 'Unit',
          cardRace: 'Human',
          cardClass: 'Warrior',
          image: fighterImage,
          cardEffects: {
            offense: '+1 attack',
            defense: 'FIGHTERS DO NOT DEFEND',
            neutral: 'I have no opinion either way on this card...',
          },
          cardPower: 2,
          cardDefense: 3
        },
        {
          name: 'Battle Mage',
          cost: '4',
          devotion: {
            fire: 3,
            water: 2,
          },
          cardType: 'Unit',
          cardRace: 'Human',
          cardClass: 'Mage',
          image: fighterImage,
          cardEffects: {
            offense: '+2 attack',
            defense: 'Mages sometimes defend...',
            neutral: 'I have no opinion either way on this card...',
          },
          cardPower: 3,
          cardDefense: 2
        }
      ],
      playerDiscard: [],
      playerResources: [],
      playerField: {
        resources: [],
        defense: [
          {
            name: 'Battle Mage',
            cost: '4',
            devotion: {
              fire: 3,
              water: 2,
            },
            cardType: 'Unit',
            cardRace: 'Human',
            cardClass: 'Mage',
            image: fighterImage,
            cardEffects: {
              offense: '+2 attack',
              defense: 'Mages sometimes defend...',
              neutral: 'I have no opinion either way on this card...',
            },
            cardPower: 3,
            cardDefense: 2
          }
        ],
        offense: []
      },
      playerParagon: {
        img: shadowFace,
        name: 'Inner Shadow',
      },

      opponentHealth: 20,
      opponentDeck: [],
      opponentHand: [],
      opponentDiscard: [],
      opponentResources: [],
      opponentField: {
        resources: [],
        defense: [],
        offense: []
      },
      opponentParagon: {
        img: shadowFace,
        name: 'Inner Shadow',

      },

      detailsExpanded: false,
      cardPreview: null,
    }
    this.removeHealth = this.removeHealth.bind(this)
    this.addHealth = this.addHealth.bind(this)
    this.expandDetails = this.expandDetails.bind(this)
    this.onCardHover = this.onCardHover.bind(this)
  }
  componentDidMount(){

  }

  addHealth(e){
    let newHealth = this.state[`${e.currentTarget.id}Health`] + 1
    this.setState({
      playerHealth: newHealth
    })
  }
  removeHealth(e){
    e.preventDefault()
    let newHealth = this.state[`${e.currentTarget.id}Health`] - 1
    this.setState({
      playerHealth: newHealth
    })
  }

  expandDetails(){
    let elems = document.getElementById('details').classList
    if(this.state.detailsExpanded){
      elems.remove('show')
    } else {
      elems.add('show')
    }
    this.setState({
      detailsExpanded: !this.state.detailsExpanded
    })
  }

  onCardHover(e){
    console.log(e.currentTarget)
    console.log(e.currentTarget.location)
  }

  render(){
    let playerHand = []
    this.state.playerHand.forEach((card, i)=>{
      playerHand.push(<Card loc={'playerHand'+i} cardSize='full' cardData={card} key={'playerHand'+i} onHover={this.onCardHover}/>)
    })
    let playerDefense = []
    this.state.playerField.defense.forEach((card, i)=>{
      playerDefense.push(<Card loc={'playerDefense'+i} cardSize='mini' cardData={card} key={'playerDefense'+i} onHover={this.onCardHover}/>)
    })
    return(
      <div className='board-wrapper'>
        <div className='board-sidebar'>
          <div className='opponent-sidebar'></div>
          <div className='player-sidebar'></div>
        </div>

        <div className='board-opponent-side'>
          <div className='opponent-field'>
            <div className='resources'></div>
            <div className='defense'></div>
            <div className='offense'></div>
          </div>
          <div className='opponent-sidebar'>
            <div className='paragon'>
              <div className='opponent-health'>{this.state.opponentHealth}</div>
              <img src={this.state.opponentParagon.img} alt='paragon'/>
            </div>
            <h3>{this.state.opponentParagon.name}</h3>
          </div>
        </div>

        <div className='board-player-side'>
          <div className='player-field'>
            <div className='offense'></div>
            <div className='defense'>{playerDefense}</div>
            <div className='resources'></div>
          </div>
          <div className='player-sidebar'>
            <div className='paragon' id='player' onClick={this.addHealth} onContextMenu={this.removeHealth}>
              <div className='player-health'>{this.state.playerHealth}</div>
              <img src={this.state.playerParagon.img} alt='paragon'/>
            </div>
            <h3>{this.state.playerParagon.name}</h3>
          </div>
        </div>

        <div id='details' className='details-view'>
          <div className='details-view-expand' onClick={this.expandDetails}>{this.state.detailsExpanded ? '>' : '<'}</div>
          <div className='details-view-card'><Card loc={'playerHand'+'1'} cardSize='full' cardData={this.state.playerHand[1]} key={'playerHand'+'1'} onHover={this.onCardHover}/>{this.state.cardPreview ? <Card /> : null}</div>
        </div>
        <div className='player-hand'>
          {playerHand}
        </div>
      </div>
    )
  }
}