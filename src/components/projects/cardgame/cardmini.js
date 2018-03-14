import React, {Component} from 'react'

export default class CardMini extends Component {
  render(){
    let card = this.props.data
    let supply = []
    for(let key in card.devotion){
      supply.push(
        <div className={`card-supply ${key}`} key={card.loc+key}>{card.devotion[key]}</div>
      )
    }
    return(
      <div className='card-mini-wrapper'>
        <div className='card-mini-topline'>
          <div className='card-mini-cost'>
            <div className='card-min-total-cost'>{card.cost}</div>
            <div className='card-mini-supply-wrapper'>
              {supply}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
