import { useState } from "react";
export default function Player({initialName , symbol, isActiveSymbol}){
    const [Editing , setIsEditing ] = useState(false);
    const [redMi , setRedMi] = useState(initialName)
    
    function handleClick(){
        setIsEditing(editing => !editing)
    }
    function  interChange(e){
    setRedMi(e.target.value);
    }
    
    let playerName = <span className="player-name">{redMi}</span>
    if (Editing) {
        playerName = <input type="text" required onChange={interChange} value={redMi}/>
    }
    

    
    return(
        <li className={isActiveSymbol ? "active" : undefined} >
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick} >{Editing ? "Save" : "Edit"} </button>
        </li>
    )
}