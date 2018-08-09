import React from 'react'

const Shearch =(props) => (
    <input
    value={props.searchPharse}
    onChange={props.onShearchPharseChanged}
    />
)


export default Shearch