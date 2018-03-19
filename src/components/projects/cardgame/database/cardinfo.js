import fighterImage from '../images/fighter.png'
import battleMageImage from '../images/battlemage.png'
const cardInfo = {
  battleMage: {
    name: 'Battle Mage',
    cost: '4',
    devotion: {
      fire: 3,
      water: 2,
    },
    cardType: 'Unit',
    cardRace: 'Human',
    cardClass: 'Mage',
    image: battleMageImage,
    cardEffects: {
      offense: '+2 attack',
      defense: 'Mages sometimes defend...',
      neutral: 'I have no opinion either way on this card...',
    },
    cardPower: 3,
    cardDefense: 2
  },
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
    image: fighterImage,
    cardEffects: {
      offense: '+1 attack',
      defense: 'FIGHTERS DO NOT DEFEND',
      neutral: 'I have no opinion either way on this card...',
    },
    cardPower: 2,
    cardDefense: 3
  }

}

export default cardInfo
