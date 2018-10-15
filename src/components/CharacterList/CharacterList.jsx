import React from 'react';

import './CharacterList.css'

import Character from './Character'

const CharacterList = (props) => {
    const characters = props.characters.filter(character => {
        return !character.selected
    })

    return (
        <div className='CharacterList'>
            {
                characters.map((x,i) => {
                    return (
                        <Character 
                            key={i}
                            character={x}
                        />
                    )
                })
            }
        </div>
    )
}
export default CharacterList
