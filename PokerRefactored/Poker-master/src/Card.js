import React from "react"

function Card(props){
    return(
        <div className = 'cardImgHolder'>
            <img className = 'cardImg' src = {require (`./JPEG/${props.card}.jpg`)} alt = ""></img>
        </div>
    )
}

export default Card