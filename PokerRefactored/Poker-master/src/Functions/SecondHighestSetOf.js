import HighestPairedSetOf from './HighestPairedSetOf'

export default function SecondHighestSetOf(tempAlterableHand, cardRank){
    let highestSet = []
    let secondHighestSet = []
    highestSet.push(...HighestPairedSetOf(tempAlterableHand, cardRank))
    let restOfHand = []
    for(let i = 0; i < tempAlterableHand.length; i++){
        if(!  highestSet.includes(tempAlterableHand[i])){
        restOfHand.push(tempAlterableHand[i])
        }
    }
    secondHighestSet.push(...HighestPairedSetOf(restOfHand, cardRank))
    
    return secondHighestSet
}