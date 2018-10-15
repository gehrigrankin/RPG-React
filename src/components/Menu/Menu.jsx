import React from 'react';

import './Menu.scss'

import Option from './Option';
import CharacterList from '../CharacterList'

class Menu extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            options: [
                {
                    name: "Start",
                    display: true,
                    // click: 
                },
                {
                    name: "Select Character",
                    display: true,
                    click: false
                },
                {
                    name: "Options",
                    display: true,
                    // click: 
                },
                {
                    name: "Quit",
                    display: false,
                    // click: 
                },
            ]
        }
    }

    selectCharacter = () => {
        return (
            <CharacterList 
                characters={this.props.characters} 
                selected={this.props.selected}
            />
        ) 
    }

    render(){
        return (
            <div className='Menu'>
            {
                this.state.options.map((x, i) => {
                    return (
                        x.display ? 
                            <Option key={i} name={x.name} /> : null

                    )
                })
            }
            {
                this.state.options[1].click ? 
                    this.selectCharacter() : null
            }
            </div>
        )
    }
}
export default Menu
