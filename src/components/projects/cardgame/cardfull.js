import React, {Component} from 'react'

import '../../../styles/css/card.css'

export default class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      overflow: false,
      fighter: {
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
        image: 'fighterImage',
        cardEffects: {
          offense: '+1 attack',
          defense: 'FIGHTERS DO NOT DEFEND',
          neutral: 'I have no opinion either way on this card...',
        },
        cardPower: 2,
        cardDefense: 3
      }
    }
    // this.checkOverFlow = this.checkOverFlow.bind(this)
  }
  componentDidMount(){
  }

  // checkOverFlow(e){
  //   console.log(document.getElementById('card-info-box').scrollWidth)
  //   let overflow = document.getElementById('card-info-box').scrollWidth > 0 ? true : false
  //   this.setState({overflow})
  // }

  render(){
    let card = this.props.data
    let supply = []
    let cardNum = 1
    for(let key in card.devotion){
      supply.push(
        <div className={`card-supply ${key}`} key={cardNum}>{card.devotion[key]}</div>
      )
      cardNum++
    }
    return(
      <div id={this.props.loc} location={this.props.loc} className='card-wrapper' onClick={this.props.onClick} onMouseEnter={() => this.props.onHover(this.props.loc, this.props.data)} >
        <div className='card-top-line'>
          <div className='card-casting'>
            <div className='card-cost'>{card.cost}</div>
            <div className='card-supply-guide'>
              <div className='card-supply-wrapper'>
                {supply}
              </div>
            </div>
          </div>
          <div className='card-name-types'>
            <div className='card-name'>{card.name}</div>
            <div className='card-type'>{`${card.cardType} - ${card.cardRace} ${card.cardClass}`}</div>
          </div>
        </div>

        <div className='card-image-box'>
          <img src={card.image} alt='card'/>
        </div>

        <div className='card-effects'>
          {card.cardEffects.offense ? <div className='card-effects-box offense'>{card.cardEffects.offense}</div> : null}
          {card.cardEffects.defense ? <div className='card-effects-box defense'>{card.cardEffects.defense}</div> : null}
          {card.cardEffects.neutral ? <div className='card-effects-box neutral'>{card.cardEffects.neutral}</div> : null}
        </div>

        <div className='card-bottom'>
          <div>
            <div className='card-stats'>
              <div className='inner'>{`${card.cardPower} / ${card.cardDefense}`}</div>
            </div>
          </div>
          <div className='card-legal'>&copy; Trevor B Wilson 2018</div>
        </div>

        {/* <div className='card-info-box'></div> */}
      </div>
    )
  }
}
