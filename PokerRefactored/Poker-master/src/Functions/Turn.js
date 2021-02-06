export default function Turn(board, deck, flopped, turned){
      const newBoard = board
      const dealtFromDeck = deck
      if(newBoard.length < 4 && flopped === true){
        newBoard.push(deck[0])
        dealtFromDeck.shift()
        turned = true
      }
      console.log(dealtFromDeck)
      const newBoardAndDeck = 
        {
            board: newBoard,
            deck: dealtFromDeck,
            turned: turned
        }
      return (newBoardAndDeck)
  }