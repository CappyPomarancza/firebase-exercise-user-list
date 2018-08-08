import React from 'react'
import PropTypes from 'prop-types'

const Froms = (props) =>(
    <div>
        <input 
        type="text"
        placeholder={'Name'}
        value={props.newUserName}
        onChange={props.newUserChangeHandler}
        />
        <button
        onClick={props.onAddNewUserClick}
        >
            Add User!
        </button>
    </div>
)


Froms.propsType ={
    newUserName: PropTypes.string.isRequired
}


export default Froms