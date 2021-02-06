export default function Deal(deck, dealt, hand){
    
        const newHand = hand
        const dealtFromDeck = deck    
        let i = 0
        let shiftTimes = 0
        if(dealt===false){
            while(newHand.length < 2){
                newHand.push(deck[i])
                i++
            }
            while(shiftTimes < i ){
                dealtFromDeck.shift()
                shiftTimes++
            }
            console.log(dealtFromDeck)
        }
        const newHandandDealtFromDeck = {
            newHand: newHand,
            dealtFromDeck: dealtFromDeck,
            dealt: true
        }
        
        return (
            newHandandDealtFromDeck
        )
}