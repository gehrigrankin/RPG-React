import React from 'react';

import './Character.css'

const Character = (props) => {
    return (
        <div className='Character'>
            <p>{props.character.name}</p>
        </div>
    )
}
export default Character
