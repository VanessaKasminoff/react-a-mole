import React from "react";

function EmptySlot() {
/* 
    - Represents an empty molehill/invalid location to click. Will render when displayMole (in MoleContainer) === false.
    - Contain an internal timer to cycle the display.
    - A useEffect hook that will start the timer and clean it up afterward.
*/
    return (
        <div className="empty-slot">
            <h2>Empty Slot</h2>
        </div>
    )
}

export default EmptySlot