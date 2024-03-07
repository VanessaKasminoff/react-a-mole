import React, {useEffect} from "react";
import MoleImg from './images/mole.png'

function Mole(props) {

    useEffect(() => {
        let seconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, seconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className="mole-div">
            <img src={MoleImg} alt="mole" onClick={props.handleClick}/>
        </div>
    )
}

export default Mole