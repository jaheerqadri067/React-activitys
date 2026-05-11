import { useState } from "react";
export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});

    let blueMoves = () => {
        setMoves((prevMoves) => {
            return{...prevMoves, blue: prevMoves.blue + 1}
        })
    }

    return(
        <div>
            <p>moves of Blue {moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={blueMoves}>+1</button>

            <p>moves of red {moves.red}</p>
            <button style={{backgroundColor: "red"}}>+1</button>

            <p>moves of green {moves.green}</p>
            <button style={{backgroundColor: "green"}}>+1</button>

            <p>moves of yellow {moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}}>+1</button>
        </div>
    )
}