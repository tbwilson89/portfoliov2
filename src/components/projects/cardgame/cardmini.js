import React, {Component} from 'react'

import '../../../styles/css/cardmini.css'

export default class CardMini extends Component {
  render(){
    let card = this.props.data
    let supply = []
    for(let key in card.devotion){
      supply.push(
        <div className={`card-mini-supply ${key}`} key={card.loc+key}>{card.devotion[key]}</div>
      )
    }
    return(
      <div id={this.props.loc} location={this.props.loc} className='card-mini-wrapper' onMouseEnter={() => this.props.onHover(this.props.loc, this.props.data)}>

        <div className='card-mini-topline'>
          <div className='card-mini-cost'>
            <div className='card-mini-total-cost'>{card.cost}</div>
            <div className='card-mini-supply-wrapper'>
              {supply}
            </div>
          </div>

        </div>

        <div className='card-mini-image-box'>
          <img src={card.image} alt='card'/>
        </div>

        <div className='card-mini-bottom'>
          <div>
            <div className=''>
              <div className='card-mini-stats card-stat-attack'>{`${card.cardPower}`}</div>
              <div className='card-mini-stats card-stat-defense'>{card.cardDefense}</div>
            </div>
            <div className='card-mini-name-type'>
              <div className='card-mini-name'>{card.name}</div>
              {/* <div className='card-mini-type'>{`${card.cardType} - ${card.cardRace} ${card.cardClass}`}</div> */}
            </div>
          </div>
          {/* <div className='card-legal'>&copy; Trevor B Wilson 2018</div> */}
        </div>

      </div>
    )
  }
}
