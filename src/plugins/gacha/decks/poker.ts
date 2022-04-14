import { Card, Deck } from './deck'

type PokerSuit = '红桃' | '方块' | '梅花' | '黑桃' | '大王' | '小王'
type PokerRank = 'A' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'

class PokerCard extends Card {
  public readonly suit: PokerSuit
  public readonly rank: PokerRank | undefined

  constructor(suit: PokerSuit, rank?: PokerRank) {
    super(rank ? `${suit} ${rank}` : suit)
    this.suit = suit
    this.rank = rank
  }
}

const cards: PokerCard[] = []

// Generate Cards
for (let i = 1; i <= 13; i++) {
  let n = '' + i

  switch (i) {
    case 1:
      n = 'A'
      break
    case 11:
      n = 'J'
      break
    case 12:
      n = 'Q'
      break
    case 13:
      n = 'K'
      break
  }

  cards.push(new PokerCard('红桃', n as PokerRank))
  cards.push(new PokerCard('方块', n as PokerRank))
  cards.push(new PokerCard('梅花', n as PokerRank))
  cards.push(new PokerCard('黑桃', n as PokerRank))
}

cards.push(new PokerCard('大王'))
cards.push(new PokerCard('小王'))

export default new Deck<PokerCard>('poker', cards, '扑克牌')
