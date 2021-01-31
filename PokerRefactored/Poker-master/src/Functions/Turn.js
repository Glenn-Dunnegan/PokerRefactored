export default function Turn(board, deck){
      const newBoard = board
      const dealtFromDeck = deck
      if(newBoard.length < 4){
        newBoard.push(deck[0])
        dealtFromDeck.shift()
      }
      console.log(dealtFromDeck)
      const newBoardAndDeck = 
        {
            board: newBoard,
            deck: dealtFromDeck
        }
      return (newBoardAndDeck)
  }