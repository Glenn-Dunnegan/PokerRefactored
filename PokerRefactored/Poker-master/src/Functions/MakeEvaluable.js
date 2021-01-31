export default function MakeEvaluable(board, hand){
    const tempEvaluableHand = []
    const tempPlayerHand = []
    tempPlayerHand.push(...board,...hand)
    for(let i = 0; i < tempPlayerHand.length; i++){
        tempEvaluableHand.push(tempPlayerHand[i].split(""))
        }

    const evaluableHand = {
    playerHand: tempPlayerHand,
    evaluableHand: tempEvaluableHand
    }

    return (evaluableHand)
}