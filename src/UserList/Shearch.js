import React from 'react'

const Shearch =(props) => (
    <input
    placeholder={'Shearch'}
    value={props.searchPharse}
    onChange={props.onShearchPharseChanged}
    />
)


export default Shearch