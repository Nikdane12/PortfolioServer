export const seq = (a,b) =>[...Array((b-a+1))].map((y,i)=>i+a)

export const colors = {red:'ff0000',black:'000000'}
export const suits = [
    {id:'H', icon:'♥', color:colors.red, name:'Hearts'},
    {id:'S', icon:'♠', color:colors.black, name:'Spades'},
    {id:'D', icon:'♦', color:colors.red, name:'Diamonds'},
    {id:'C', icon:'♣', color:colors.black, name:'Clubs'},
]
const getSingleDeck = () => suits.flatMap(x=>{
    const numCards = seq(2,10).map(num=>({value:num.toString(), suitId:x.id})).filter(y=>y.value>1) 
    const faceCards = ['A','J','Q','K'].map(f=>({value:f, suitId:x.id}))
    const suiteCards = [...numCards,...faceCards]
    return suiteCards
})


export const getDeck = numDecks => seq(0,numDecks-1).flatMap(()=>getSingleDeck()).map((x,i)=>({id:i,...x}))
export const pullRandomFromCards = (cards,num) => seq(0,num-1).map(()=>cards.splice(Math.floor(Math.random() * cards.length),1)).flat()
export const getRandomFromCards = cards => cards[Math.floor(Math.random() * cards.length)]
export const getSuit = card => suits.find(x=>x.id == card.suitId)