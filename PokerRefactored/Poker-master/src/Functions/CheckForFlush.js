export default function CheckForFlush(tempAlterableHand){
    let flushedCards = []
    let spades = []
    let hearts = []
    let diamonds = []
    let clubs = []
    let isFlushed = false
    for(let i = 0; i < tempAlterableHand.length; i++){
      if(tempAlterableHand[i][1] === `S` && spades.includes(tempAlterableHand[i]) === false){
        spades.push(tempAlterableHand[i])
      }else if(tempAlterableHand[i][1] === `H` && hearts.includes(tempAlterableHand[i]) === false){
        hearts.push(tempAlterableHand[i])
      }else if(tempAlterableHand[i][1] === `D` && diamonds.includes(tempAlterableHand[i]) === false){
        diamonds.push(tempAlterableHand[i])
      }else if(tempAlterableHand[i][1] === `C` && clubs.includes(tempAlterableHand[i]) === false){
        clubs.push(tempAlterableHand[i])
      }
    }
    if(spades.length >= 5){
      flushedCards = spades
      isFlushed = true
    }else if(hearts.length >= 5){
      flushedCards = hearts
      isFlushed = true
    }else if(diamonds.length >= 5){
      flushedCards = diamonds
      isFlushed = true
    }else if(clubs.length >= 5){
      flushedCards = clubs
      isFlushed = true
    }
    if(isFlushed){
      return flushedCards
    }else{
      return false
    }
}