import MakeEvaluable from './MakeEvaluable'
import CheckForStraight from './CheckForStraight'
import CheckForFlush from './CheckForFlush'
import HighestPairedSetOf from './HighestPairedSetOf'
import SecondHighestSetOf from './SecondHighestSetOf'

export default function EvaluateHand(cardRank, handRanks, board, hand){
          let tempRank = ``
          let tempAlterableHand = MakeEvaluable(board, hand).evaluableHand
          let straightFlushedHand = []
          let evaluation = {}
          // Sorts the collection of player's hand and the board from least to greatest in accordance to the rank defined in state
          tempAlterableHand.sort((a, b) => cardRank.indexOf(a[0]) - cardRank.indexOf(b[0]))
          // Checks for straight flush
          if(CheckForFlush(tempAlterableHand) !== false){
            let flushedHand = CheckForFlush(tempAlterableHand)
            if(CheckForStraight(flushedHand, cardRank) !== false){
              straightFlushedHand = CheckForStraight(flushedHand, cardRank)
              if(straightFlushedHand[straightFlushedHand.length - 1][0] === `A`){
                tempRank = `Royal Flush`

                evaluation = {
                    finalPlayerHand: straightFlushedHand,
                    playerHandRank: handRanks[9],
                    handMessage: tempRank
                }
                return evaluation
              }
              tempRank = `${straightFlushedHand[straightFlushedHand.length - 1][0]} high Straight ${flushedHand[0][1]} Flush`

              evaluation = {
                finalPlayerHand: straightFlushedHand,
                playerHandRank: handRanks[8],
                handMessage: tempRank
              }
              return evaluation
            }
          }
          // Checks for four of a kind
          if(HighestPairedSetOf(tempAlterableHand, cardRank).length === 4){
            let fourOfAKindHand = []
            fourOfAKindHand.push(...HighestPairedSetOf(tempAlterableHand, cardRank))
            for(let i = tempAlterableHand.length - 1; i >= 0; i--){
              if(fourOfAKindHand.includes(tempAlterableHand[i]) === false){
                fourOfAKindHand.push(tempAlterableHand[i])
                tempRank = `Four of a Kind of ${fourOfAKindHand[0][0]}s with ${fourOfAKindHand[fourOfAKindHand.length - 1][0]} high`
                evaluation = {
                    finalPlayerHand: fourOfAKindHand,
                    playerHandRank: handRanks[7],
                    handMessage: tempRank
                  }
                return evaluation
              }
            }
          }
          // Checks for a full house
          if(HighestPairedSetOf(tempAlterableHand, cardRank).length === 3){
            let fullHouseHand = []
            fullHouseHand.push(...HighestPairedSetOf(tempAlterableHand, cardRank))
            let insidePair = []
            insidePair.push(...SecondHighestSetOf(tempAlterableHand, cardRank))
            while(insidePair.length > 2){
              insidePair.shift()
            }
            if(insidePair.length === 2){
              fullHouseHand.push(...insidePair)
              tempRank = `Full House ${fullHouseHand[0][0]}s full of ${fullHouseHand[fullHouseHand.length - 1][0]}s`
              evaluation = {
                finalPlayerHand: fullHouseHand,
                playerHandRank: handRanks[6],
                handMessage: tempRank
              }
              return evaluation
            }
          }
          // Checks for Flush
          if(CheckForFlush(tempAlterableHand) !== false){
            let flushHand =  CheckForFlush(tempAlterableHand)
            tempRank = `${flushHand[flushHand.length - 1][0]} high ${flushHand[0][1]} Flush`
            evaluation = {
                finalPlayerHand: flushHand,
                playerHandRank: handRanks[5],
                handMessage: tempRank
            }
            return evaluation
          }
          // Checks for Straight
          if(CheckForStraight(tempAlterableHand, cardRank) !== false){
            let straightHand = CheckForStraight(tempAlterableHand, cardRank)
            tempRank = `${straightHand[straightHand.length - 1][0]} high Straight`
            evaluation = {
                finalPlayerHand: straightHand,
                playerHandRank: handRanks[4],
                handMessage: tempRank
            }
            return evaluation
          }
          // Checks for three of a kind
          if(HighestPairedSetOf(tempAlterableHand, cardRank).length === 3){
            let tripsHand = []
            tripsHand.push(...HighestPairedSetOf(tempAlterableHand, cardRank))
            for(let i = tempAlterableHand.length - 1; tripsHand.length < 5; i--){
              if(tripsHand.includes(tempAlterableHand[i]) === false){
                tripsHand.push(tempAlterableHand[i])
              }
            }
              tempRank = `Three of a kind of ${tripsHand[0][0]} with ${tripsHand[tripsHand.length - 2][0]} ${tripsHand[tripsHand.length - 1][0]} high`
              evaluation = {
                finalPlayerHand: tripsHand,
                playerHandRank: handRanks[3],
                handMessage: tempRank
              }
              return evaluation
          }
          // Checks for two pair as well as one
          if(HighestPairedSetOf(tempAlterableHand, cardRank).length === 2 ){
            let highestPair = HighestPairedSetOf(tempAlterableHand, cardRank)
            if(SecondHighestSetOf(tempAlterableHand, cardRank).length === 2){
              let secondPair = SecondHighestSetOf(tempAlterableHand, cardRank)
              let twoPairHand = []
              twoPairHand.push(...highestPair,...secondPair)
              for(let i = tempAlterableHand.length - 1; twoPairHand.length < 5; i--){
                if(twoPairHand.includes(tempAlterableHand[i]) === false){
                  twoPairHand.push(tempAlterableHand[i])
                }
              }
              tempRank = `Two Pair ${twoPairHand[0][0]}s and ${twoPairHand[twoPairHand.length - 2][0]}s ${twoPairHand[twoPairHand.length - 1][0]} high`
              evaluation = {
                finalPlayerHand: twoPairHand,
                playerHandRank: handRanks[2],
                handMessage: tempRank
              }
              return evaluation
            }else{
              let onePairHand = []
              onePairHand.push(...highestPair)
              tempRank = `Pair of ${onePairHand[0][0]}s`
              if(tempAlterableHand.length > 4){
                for(let i = tempAlterableHand.length - 1; onePairHand.length < 5; i--){
                  if(onePairHand.includes(tempAlterableHand[i]) === false){
                    onePairHand.push(tempAlterableHand[i])
                  }
                }
                tempRank = `Pair of ${onePairHand[0][0]}s ${onePairHand[onePairHand.length - 3][0]} ${onePairHand[onePairHand.length - 2][0]} ${onePairHand[onePairHand.length - 1][0]} high`
              }
              // If none of the above return, returns current hand with High Card rank
              evaluation = {
                finalPlayerHand: onePairHand,
                playerHandRank: handRanks[1],
                handMessage: tempRank
              }
              return evaluation
            }
          }
          if(HighestPairedSetOf(tempAlterableHand, cardRank).length === 0){
            let highCardHand = []
            if(tempAlterableHand.length > 4){
              for(let i = tempAlterableHand.length - 1; highCardHand.length < 5; i--){
                if(highCardHand.includes(tempAlterableHand[i]) === false){
                  highCardHand.push(tempAlterableHand[i])
                }
              }
            }else{
              highCardHand.push(...tempAlterableHand)
            }
            tempRank = `High card of ${highCardHand[0][0]}, ${highCardHand[1][0]}`
            evaluation = {
                finalPlayerHand: highCardHand,
                playerHandRank: handRanks[0],
                handMessage: tempRank
              }
            return evaluation
          }
}