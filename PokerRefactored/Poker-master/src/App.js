import React, {Component} from 'react'
import './App.css';
import Card from './Card'
import Shuffle from './Functions/Shuffle'
import Deal from './Functions/Deal'
import Flop from './Functions/Flop'
import Turn from './Functions/Turn'
import River from './Functions/River'
import EvaluateHand from './Functions/EvaluateHand'
import MakeEvaluable from './Functions/MakeEvaluable'

class App extends Component{
    state = {
        deck: [
            `AC`,`AD`,`AH`,`AS`,
            `2C`,`2D`,`2H`,`2S`,
            `3C`,`3D`,`3H`,`3S`,
            `4C`,`4D`,`4H`,`4S`,
            `5C`,`5D`,`5H`,`5S`,
            `6C`,`6D`,`6H`,`6S`,
            `7C`,`7D`,`7H`,`7S`,
            `8C`,`8D`,`8H`,`8S`,
            `9C`,`9D`,`9H`,`9S`,
            `TC`,`TD`,`TH`,`TS`,
            `JC`,`JD`,`JH`,`JS`,
            `QC`,`QD`,`QH`,`QS`,
            `KC`,`KD`,`KH`,`KS`
          ],
          cardRank: [
            `2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,
            `T`,`J`,`Q`,`K`,`A`],
          hand: [],
          board: [],
          handRanks: [
            `High Card`,`Pair`,`Two Pair`,`Three of a Kind`,
            `Straight`,`Flush`,`Full House`,
            `Four of a Kind`,`Straight Flush`,`Royal Flush`
          ],
          playerHand: [],
          playerHandRank:'',
          evaluableHand: [],
          finalPlayerHand: [],
          handMessage: ``,
          dealt: false,
          flopped: false,
          turned: false,
          rivered: false
    }

    resetCards(){
        this.setState(() => {
          return{
            deck: [
              `AC`,`AD`,`AH`,`AS`,
              `2C`,`2D`,`2H`,`2S`,
              `3C`,`3D`,`3H`,`3S`,
              `4C`,`4D`,`4H`,`4S`,
              `5C`,`5D`,`5H`,`5S`,
              `6C`,`6D`,`6H`,`6S`,
              `7C`,`7D`,`7H`,`7S`,
              `8C`,`8D`,`8H`,`8S`,
              `9C`,`9D`,`9H`,`9S`,
              `TC`,`TD`,`TH`,`TS`,
              `JC`,`JD`,`JH`,`JS`,
              `QC`,`QD`,`QH`,`QS`,
              `KC`,`KD`,`KH`,`KS`
            ],
            hand: [],
            board: [],
            dealt: false,
            flopped: false,
            turned: false,
            rivered: false
          }
        })
        console.log(this.state.deck)
      }

    shuffleDeck(){
        this.setState(()=>{
            return{
                deck: Shuffle(this.state.deck)
            }
        })
    }

    dealHand(){
        const newHandandDealtFromDeck = Deal(this.state.deck, this.state.dealt, this.state.hand)
        this.setState(()=>{
            return{
                hand: newHandandDealtFromDeck.newHand,
                deck: newHandandDealtFromDeck.dealtFromDeck,
                dealt: newHandandDealtFromDeck.dealt
            }
        })
    }

    flop(){
        const newBoardAndDeck = Flop(this.state.board, this.state.deck, this.state.dealt, this.state.flopped)
        this.setState(()=>{
            return{
                board: newBoardAndDeck.board,
                deck: newBoardAndDeck.deck,
                flopped: newBoardAndDeck.flopped
            }
        })
    }

    turn(){
        const newBoardAndDeck = Turn(this.state.board, this.state.deck, this.state.flopped, this.state.turned)
        this.setState(()=>{
            return{
                board: newBoardAndDeck.board,
                deck: newBoardAndDeck.deck,
                turned: newBoardAndDeck.turned
            }
        })
    }

    river(){
        const newBoardAndDeck = River(this.state.board, this.state.deck, this.state.turned)
        this.setState(() => {
            return{
                board: newBoardAndDeck.board,
                deck: newBoardAndDeck.deck,
                rivered: newBoardAndDeck.rivered
            }
        })
    }

    evaluateHand(){
        if(this.state.dealt === true){
            const evaluation  = EvaluateHand(this.state.cardRank, this.state.handRanks, this.state.board, this.state.hand)
            this.setState(() => {
                return{
                    finalPlayerHand: evaluation.finalPlayerHand,
                    playerHandRank: evaluation.playerHandRank,
                    handMessage: evaluation.handMessage
                }
            })
        }else{
            this.setState(() => {
                return{
                    handMessage: 'You need to at least be dealt a hand'
                }
            })
        }
    }

    consoleTest(){
        // console logs returned value of MakeEvaluable Function with given arguments
        console.log(MakeEvaluable(this.state.board, this.state.hand).evaluableHand)
    }

    render(){
        const newBoard = this.state.board.map((card, i) => {
            return(
              <Card card = {card} key = {i}/>
            )
          })
          const newHand = this.state.hand.map((card, i) => {
            return(
              <Card card = {card} key = {i}/>
            )
          })
        return(
            <div className = 'mainContent'>
                <div className = 'cardWindow'>
                    <div className = 'boardWindow'>
                        {newBoard}
                        <div className = 'cardBackImgHolder'>
                            <img className = 'cardBackImg'src = {require (`./JPEG/cardBackRed.png`)} alt = ""></img>
                        </div>
                    </div>
                    <div className = 'handWindow'>{newHand}</div>
                </div>
                <div className = 'basicButtons'>
                    <button className = 'reset' style = {{color: 'red'}} onClick = {() => this.resetCards()}>Reset Cards</button>
                    <button onClick = {() => this.shuffleDeck()}>Shuffle</button>
                    <button onClick = {() => this.dealHand()}>Deal</button>
                    <button onClick = {() => this.flop()}>Flop</button>
                    <button onClick = {() => this.turn()}>Turn</button>
                    <button onClick = {() => this.river()}>River</button>
                </div>
                <div><button className = 'evalBtn' onClick = {() => this.evaluateHand()}>What is my hand?</button></div>
                <div className = 'handEvaluation'>{this.state.handMessage}</div>
            </div>
        )
    }
}

export default App