import Player from "./components/Player"
import GameBoard from "./components/gameBoard"
import {useState} from "react";


function colIndex() {

}

function App() {
const [isActive, setIsActive] = useState("X");
const [GameTurns, setTurns] = useState([]);
function onselectTwo(rowIndex, colIndex) {
    setIsActive((curActivePlay ) => curActivePlay === "X" ? "O" :"X");
    setTurns((prevTurns) => {
        let currentPlayer = "X"
        if (prevTurns.length > 0 && prevTurns[0].player === "X"){
            currentPlayer = "O"
        }
        return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns,
        ]

    })

    }
return (
  <main>
    <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActiveSymbol={isActive === "X"}/>
            <Player initialName="Player 2" symbol="0" isActiveSymbol={isActive === "O"}/>
        </ol>
    <GameBoard onSelectPlayer={()=> onselectTwo(rowIndex, colIndex ) } turns={GameTurns} />
    </div>
  </main>
)

}
export default App
