export default function HighestPairedSetOf(tempAlterableHand, cardRank){
        let allSets = []
        let currentSet = []
        let currentHighestSet = []
        for(let i = 0; i < tempAlterableHand.length - 1; i++){
          if(tempAlterableHand[i][0] === tempAlterableHand[i+1][0]){
            if(allSets.includes(tempAlterableHand[i]) === false){
              allSets.push(tempAlterableHand[i])
            }
            if(allSets.includes(tempAlterableHand[i+1][0]) === false){
              allSets.push(tempAlterableHand[i+1])
            }
          }
        }
        for(let i = 0; i < allSets.length - 1; i++){
          if(allSets[i][0] === allSets[i+1][0]){
            if(currentSet.includes(allSets[i]) === false){
              currentSet.push(allSets[i])
            }
            if(currentSet.includes(allSets[i+1]) === false){
              currentSet.push(allSets[i+1])
            }
          }
          if(allSets[i][0] !== allSets[i+1][0]){
            if(currentSet.length > currentHighestSet.length){
              currentHighestSet = currentSet
              currentSet = []
              
            }else if(cardRank.indexOf(currentSet[0][0]) > cardRank.indexOf(currentHighestSet[0][0]) && currentSet.length === currentHighestSet.length){
              currentHighestSet = currentSet
              currentSet = []
            }else{
              currentSet = []
            }
          }
          if(i === allSets.length - 2){
            if(currentSet.length > currentHighestSet.length){
              currentHighestSet = currentSet
              currentSet = []
            }else if(cardRank.indexOf(currentSet[0][0]) > cardRank.indexOf(currentHighestSet[0][0]) && currentSet.length === currentHighestSet.length){
              currentHighestSet = currentSet
              currentSet = []
            }else{
              currentSet = []
            }
          }
        }
        return currentHighestSet
}