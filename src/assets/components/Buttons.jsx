import { useState } from 'react';
import '../styles/Buttons.css';

export default function Button({ onClick, textButton, className="" }) {
    
    // const [btnState, setBtnState] = useState(false)

    // const handleActiveClass = () => {
    //     console.log();
    //     setBtnState(!btnState)
    // }

    // const buttonActiveClass = btnState ? 'btn--active' : "";

    return (
        // <button className={`${className} ${buttonActiveClass}`} onClick={`${onClick} ${handleActiveClass}`}>{textButton}</button>
        <button className={className} onClick={onClick}>{textButton}</button>
    )
}
