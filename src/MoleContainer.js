import React, {useState} from "react";
import Mole from './Mole.js'
import EmptySlot from "./EmptySlot.js";

function MoleContainer(props) {

    let [displayMole, setDisplayMole] = useState(false)

    const handleMoleClick = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

    let renderMole = displayMole 
    ? <Mole setScore={props.setScore} toggle={setDisplayMole} handleClick={handleMoleClick} />
    : <EmptySlot setScore={props.setScore} score={props.score} toggle={setDisplayMole} />

    return (
        <div className="mole-container">
            {renderMole}
        </div>
    )
}

export default MoleContainer