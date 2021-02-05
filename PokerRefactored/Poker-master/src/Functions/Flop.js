export default function Flop(board, deck, dealt){

  
      const newBoard = board
      const dealtFromDeck = deck
      let i = 0
      let shiftTimes = 0
      if(dealt === true){
        while(newBoard.length < 3){
          newBoard.push(deck[i])
          i++
        }
        while(shiftTimes < i){
          dealtFromDeck.shift()
          shiftTimes++
        }
        console.log(dealtFromDeck)
      }
        const newBoardAndDeck = {
          board: newBoard,
          deck: dealtFromDeck
        }

        return (newBoardAndDeck)
}