import React, {Component} from 'react'

import CardFull from './cardfull'
import CardMini from './cardmini'

export default class Card extends Component {

  render(){
    let Card = this.props.cardSize === 'full' ? CardFull : CardMini
    console.log(this.props.data)
    return(
      <div style={{height: '100%', margin: '0'}}>
        <Card
          loc={this.props.loc}
          data={this.props.cardData}
          onClick={this.props.handleClick}
          onHover={this.props.onHover}
          onDrag={this.props.onDrag}
        />
      </div>
    )
  }
}

Card.defaultProps = {
  moveLoc: function(){}
}
