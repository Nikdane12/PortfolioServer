import {getDeck, pullRandomFromCards } from './blackjackUtils.js'

class Player{
    hand = $state([])
    constructor(id){
        this.id = id
    } 

    pullAndDiscard = num =>{
        if(table.source.length >= num){
            const temp = [...this.hand]
            const keep = pullRandomFromCards(temp,game.numInHand-num) // the discards are left in temp
            const pull = pullRandomFromCards(table.source,num)
            this.hand = [...keep, ...pull]
            table.sink = [...table.sink, ...temp] 
        }
    }

    pullAndDiscardCard = card => {
        const num = 1
        if(table.source.length >= num){
            let temp = [...this.hand]
            const keep = temp.filter(x=>x.id != card.id)
            temp = temp.filter(x=>x.id == card.id)
            const pull = pullRandomFromCards(table.source,num)
            this.hand = [...keep, ...pull]
            table.sink = [...table.sink, ...temp] 
        }
    }
}

export const game = $state({iteration:0, numInHand:5})
export const table = $state({souce:[], sink:[]})

export const resetGame = (numDecks, numCardsInHand, numPlayers) => {
    table.source = getDeck(numDecks)
    table.sink = []
    game.numInHand = numCardsInHand
    const players = []
    for(let i=0; i<numPlayers; i++){
        const p = new Player(i)
        players.push(p)
        p.hand = pullRandomFromCards(table.source,numCardsInHand)
    }
    game.iteration++
    return players
}