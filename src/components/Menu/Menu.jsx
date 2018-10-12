import React from 'react';

import './Menu.scss'

import Option from './Option';

class Menu extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            options: [
                {
                    name: "Start",
                    toggle: true
                },
                {
                    name: "Select Character",
                    toggle: true
                },
                {
                    name: "Options",
                    toggle: true
                },
                {
                    name: "Quit",
                    toggle: false
                },
            ]
        }
    }

    render(){
        return (
            <div className='Menu'>
            {
                this.state.options.map((x) => {
                    return (
                        x.toggle ? 
                            <Option name={x.name} /> : null

                    )
                })
            }
            </div>
        )
    }
}
export default Menu
