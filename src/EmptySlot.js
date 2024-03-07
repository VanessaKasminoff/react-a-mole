import React, {useEffect} from "react";
import MoleHill from './images/molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, seconds)
        return () => clearTimeout(timer)
    })

    const handleEmptyClick = () => {
        props.setScore(props.score - 5)
    }

    return (
        <div className="empty-slot">
            <img src={MoleHill} alt="molehill" onClick={handleEmptyClick} draggable={false}/>
        </div>
    )
}

export default EmptySlot