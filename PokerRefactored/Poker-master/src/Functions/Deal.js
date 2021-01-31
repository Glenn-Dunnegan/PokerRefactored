export default function Deal(deck){
    const newHand = []
    const dealtFromDeck = deck    
    let i = 0
    let shiftTimes = 0
    while(newHand.length < 2){
    newHand.push(deck[i])
    i++
    }
    while(shiftTimes < i ){
    dealtFromDeck.shift()
    shiftTimes++
    }
    console.log(dealtFromDeck)

    const newHandandDealtFromDeck = {
        newHand: newHand,
        dealtFromDeck: dealtFromDeck
    }
    
    return (
    newHandandDealtFromDeck
    )
}