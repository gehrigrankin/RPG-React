import React from 'react';

import './Option.scss'

const Option = (props) => {
    return (
        <div className='Option column is-one-fifth'>
            <p className="title is-5 has-text-white">
                {props.name}
            </p>
        </div>
    )
}
export default Option
