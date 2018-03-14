import React, {Component} from 'react'

import CardFull from './cardfull'
import CardMini from './cardmini'

export default class Card extends Component {

  render(){
    let Card = this.props.cardSize === 'full' ? CardFull : CardMini
    return(
      <div>
        <Card loc={this.props.loc} data={this.props.cardData} onHover={this.props.onHover}/>
      </div>
    )
  }
}
