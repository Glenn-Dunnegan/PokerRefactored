export default function CheckForStraight(tempAlterableHand, cardRank){
    let bottomOfStraight = ``
    let downStraightedCount = 1
    let upStraightedCount = 1
    let straightedCards = []
    let wheeledStraight = []
    let isStraighted = false
    let isStraightedWithWheel = false
    for(let i = 0; i < tempAlterableHand.length - 1; i++){
      if(cardRank.indexOf(tempAlterableHand[i][0]) === cardRank.indexOf(tempAlterableHand[i+1][0])-1){
          if(straightedCards.includes(tempAlterableHand[i]) === false){
            straightedCards.push(tempAlterableHand[i])
          }
          if(straightedCards.includes(tempAlterableHand[i+1]) === false){
            straightedCards.push(tempAlterableHand[i+1])
          }
          if(i+2 <= tempAlterableHand.length -1){
            if(cardRank.indexOf(tempAlterableHand[i+1][0]) === cardRank.indexOf(tempAlterableHand[i+2][0])){
                straightedCards.push(tempAlterableHand[i+2])
            }
          }
      }
    }
    for(let i = straightedCards.length - 1 ; i > 0; i--){
      if(cardRank.indexOf(straightedCards[i][0]) === cardRank.indexOf(straightedCards[i - 1][0]) + 1){
        downStraightedCount++
        if(downStraightedCount === 4 && straightedCards[i-1][0] === `2` && tempAlterableHand[tempAlterableHand.length - 1][0] === `A`){
          wheeledStraight.push(...straightedCards)
          isStraightedWithWheel = true
        }
        if(downStraightedCount === 5){
          bottomOfStraight = straightedCards.indexOf(straightedCards[i-1])
          for(let i = bottomOfStraight; i < straightedCards.length - 1; i++){
            if(cardRank.indexOf(straightedCards[i][0]) === cardRank.indexOf(straightedCards[i + 1][0]) - 1){
              upStraightedCount++
              if(upStraightedCount === 5){
                isStraighted = true
              }
            }
          }
        }
      }else if((cardRank.indexOf(straightedCards[i][0]) !== cardRank.indexOf(straightedCards[i - 1][0]) + 1) 
            && (cardRank.indexOf(straightedCards[i][0]) !== cardRank.indexOf(straightedCards[i - 1][0]))){
            downStraightedCount = 1
      }
    }
    if(isStraightedWithWheel){
      return wheeledStraight
    }else if(isStraighted){
      return straightedCards
    }else{
      return false
    }
}