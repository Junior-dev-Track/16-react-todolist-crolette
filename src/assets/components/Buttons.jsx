import { useState } from 'react';
import './Buttons.css';

export default function Button({onClick, textButton, className}) {
    return (
        <button className={className} onClick={onClick}>{textButton}</button>
    )
}
