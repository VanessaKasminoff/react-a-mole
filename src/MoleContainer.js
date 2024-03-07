import React from "react";
import Mole from './Mole.js'
import EmptySlot from "./EmptySlot.js";

function MoleContainer(props) {
/* 
    - Component that decides which child will be rendered.
    - Store a Boolean state variable called displayMole here.
    - A handleClick function that will increment the score by 1 and set the clicked-on mole to no longer display
        (this will pass down only to Mole components)
    - A ternary that will determine which child to render
*/
    return (
        <div className="mole-container">
            <h2>Mole Container</h2>
            <Mole/>
            <EmptySlot/>
        </div>
    )
}

export default MoleContainer