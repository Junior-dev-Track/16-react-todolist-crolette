import { useState } from 'react';
import '../styles/Buttons.css';

export default function Button({onClick, textButton, className}) {
    return (
        <button className={className} onClick={onClick}>{textButton}</button>
    )
}
