export default function River(board, deck, turned, rivered){
      const newBoard = board
      const dealtFromDeck = deck
      if(newBoard.length < 5 && turned === true){
        newBoard.push(deck[0])
        dealtFromDeck.shift()
        rivered = true
      }
      console.log(dealtFromDeck)

      const newBoardAndDeck = {
        board: newBoard,
        deck: dealtFromDeck,
        rivered: rivered
      }

      return (newBoardAndDeck)
}