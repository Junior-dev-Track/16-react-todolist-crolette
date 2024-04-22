import { useState } from 'react';

export default function Button({onClick, textButton}) {
    return (



        
        <button onClick={onClick}>{textButton}</button>
    )
}
