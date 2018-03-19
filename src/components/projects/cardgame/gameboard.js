import React, {Component} from 'react'

import '../../../styles/css/gameboard.css'
import cardInfo from  './database/cardinfo.js'

import shadowFace from './images/shadowface.jpg'

import Card from './card'

export default class GameBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerHealth: 20,
      playerDeck: [],
      playerDiscard: [],
      playerResources: [],
      playerCardZones: {
        resources: [],
        defense: [
        ],
        offense: [],
        hand: [
        ],
        deck: [],
        grave: [],
        void: [],
        aether: [],
        moving: [],

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
        offense: [],
        hand: []
      },
      opponentParagon: {
        img: shadowFace,
        name: 'Inner Shadow',

      },

      detailsExpanded: false,
      cardPreview: [],
      cardMenuLoc: '',
      menuX: '',
      menuY: '',
    }
    this.onLeftClick = this.onLeftClick.bind(this)
    this.removeHealth = this.removeHealth.bind(this)
    this.addHealth = this.addHealth.bind(this)
    this.expandDetails = this.expandDetails.bind(this)
    this.onCardHover = this.onCardHover.bind(this)
    this.returnCard = this.returnCard.bind(this)
    this._onPageClick = this._onPageClick.bind(this)

    this.testFun = this.testFun.bind(this)
  }
  componentDidMount(){
    document.addEventListener('click', this._onPageClick)
    console.log(cardInfo.fighter)

    let playerCards = JSON.parse(JSON.stringify(this.state.playerCardZones))
    playerCards.hand.push(JSON.parse(JSON.stringify(cardInfo.fighter)))
    playerCards.hand.push(JSON.parse(JSON.stringify(cardInfo.battleMage)))
    playerCards.hand.push(JSON.parse(JSON.stringify(cardInfo.cleric)))
    playerCards.hand.push(JSON.parse(JSON.stringify(cardInfo.librarian)))
    let options = [cardInfo.fighter, cardInfo.battleMage, cardInfo.cleric, cardInfo.librarian]
    for(let i = 0; i<30;i++){
      playerCards.deck.push(JSON.parse(JSON.stringify(options[Math.floor(Math.random() * 4)])))
    }

    console.log(this.state.playerCardZones.deck)
    this.setState({playerCardZones: playerCards})
    let testArr = cardInfo.fighter
    let breakArr = cardInfo.fighter
    breakArr.name = 'SUPER FIGHTER'
    console.log(testArr)

  }
  _onPageClick(e){
    e.stopPropagation()

    if(this.state.justHandledClick !== true){
      this.setState({cardMenuLoc: ''})
      console.log('page click ran')

    } else {
      this.setState({justHandledClick: false})
    }
  }
  onLeftClick(e){
    e.stopPropagation()
    this.setState({
      menuX: e.clientX,
      menuY: e.clientY,
      cardMenuLoc: e.currentTarget.id,
      justHandledClick: true
    })
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

  onCardHover(loc, data){
    this.setState({
      cardPreview: [loc, data]
    })
  }
  testFun(){
    let playerCardZones = JSON.parse(JSON.stringify(this.state.playerCardZones))
    playerCardZones.hand.push(JSON.parse(JSON.stringify(cardInfo.fighter)))
    this.setState({playerCardZones})
  }
  returnCard(loc, data){
    let playerCardZones = JSON.parse(JSON.stringify(this.state.playerCardZones))
    let cardPos = loc.split('').filter((v) => !isNaN(v)).join('')
    let cardFieldPos = loc.split('').filter((v)=> isNaN(v)).join('')

    console.log(cardFieldPos + ' ' + cardPos)
    if(cardFieldPos === 'playerDefense'){
      playerCardZones.offense.push(playerCardZones.defense[cardPos])
      playerCardZones.defense.splice(cardPos, 1)

      this.setState({
        playerCardZones
      })
    } else if (cardFieldPos === 'playerOffense'){
      playerCardZones.defense.push(playerCardZones.offense[cardPos])
      playerCardZones.offense.splice(cardPos, 1)

      this.setState({
        playerCardZones
      })
    } else if (cardFieldPos === 'playerHand'){
      playerCardZones.defense.push(playerCardZones.hand[cardPos])
      playerCardZones.hand.splice(cardPos, 1)

      this.setState({
        playerCardZones,
      })
    }
  }

  render(){
    let playerHand = []
    let playerOffense = []
    let playerDefense = []

    let playerCards = []
    console.log(playerCards)

    let previewLoc = this.state.cardPreview[0]
    let previewData = this.state.cardPreview[1]

    // for(let zone in this.state.playerCardZones){
    //   zone.forEach((card, i)=>{
    //     `player${zone}`.
    //   })
    // }
    this.state.playerCardZones.hand.forEach((card, i)=>{
      playerHand.push(
          <Card
            loc={'playerHand'+i}
            cardSize='full'
            cardData={card}
            key={'playerHand'+i}
            handleClick={this.onLeftClick}
            onHover={this.onCardHover}
          />)
    })

    this.state.playerCardZones.offense.forEach((card, i)=>{
      playerOffense.push(
        <Card
          loc={'playerOffense'+i}
          cardSize='mini'
          cardData={card}
          key={'playerOffense'+i}
          handleClick={this.onLeftClick}
          moveLoc={this.returnCard}
          onHover={this.onCardHover}
        />
      )
    })

    this.state.playerCardZones.defense.forEach((card, i)=>{
      playerDefense.push(
        <Card
          loc={'playerDefense'+i}
          cardSize='mini'
          cardData={card}
          key={'playerDefense'+i}
          handleClick={this.onLeftClick}
          moveLoc={this.returnCard}
          onHover={this.onCardHover}
        />
      )
    })
    return(
      <div className='board-wrapper'>
        <div className='board-sidebar'>
          <div className='opponent-sidebar'></div>
          <div className='player-sidebar'>
            <div className='player-deck-info' style={{marginRight: '50px'}}>{this.state.playerCardZones.deck.length}</div>
          </div>
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
            <div className='offense'>{playerOffense}</div>
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
          <div className='details-view-card'>
            {this.state.cardPreview.length >= 2 ? (
              <Card loc={previewLoc} cardSize='full' cardData={previewData} key={previewLoc} onHover={function(){}} />
            ) : null}
          </div>
          <button onClick={this.testFun}>TEST BUTTON</button>

        </div>
        <div className='player-hand'>{playerHand}</div>

        <div className='card-test-click-menu' style={{display: this.state.cardMenuLoc !== '' ? 'inline':'none',top: this.state.menuY,left: this.state.menuX}}>
          <button onClick={()=>this.returnCard(this.state.cardMenuLoc, this.state.playerCardZones[this.state.cardMenuLoc.split('').filter((v)=> isNaN(v)).join('').slice(6).toLowerCase()][this.state.cardMenuLoc.split('').filter((v)=> !isNaN(v)).join('')])}>Move this card?</button>
        </div>

      </div>
    )
  }
}
