import Player from "./Player.jsx";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
export default function GameBoard({onSelectPlayer,turns}){
    let GameBoard = initialBoard;
    for( const tick of turns){
        const {square,player} = tick ;
        const {row , col}= square;
        GameBoard[row] [col] = player;
    }
        return (
            <ol id="game-board">
                {GameBoard.map((row, rowIndex) =>
                    (<li key={rowIndex}>
                    <ol>
                        {row.map((playSymbol, colIndex) => (<li key={colIndex}>
                            <button onClick={()=>onSelectPlayer(rowIndex,colIndex)}>{playSymbol}</button>
                        </li>))}
                    </ol>
                </li>))}
            </ol>
    // const [GameBoard , setGameBoard]= useState(initialBoard)
    // function handleClick(rowIndex,colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updateGame= [...prevGameBoard.map((innerArray => [...innerArray]))]
    //         updateGame[rowIndex][colIndex] = PlayerActive ;
    //         return updateGame;
    //     })
    //     onSelectPlayer()
    // }
        )
    }