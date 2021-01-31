export default function Shuffle(deck){
    const shuffledDeck = []
    while(shuffledDeck.length < deck.length){
    const card = deck[Math.floor(Math.random() * deck.length)]
    if(shuffledDeck.includes(card) === false){
        shuffledDeck.push(card)
    }
    }
    console.log(shuffledDeck)
    return(
    shuffledDeck
    )  
}