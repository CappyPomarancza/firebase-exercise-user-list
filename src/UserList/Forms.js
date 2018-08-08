import React from 'react'
import PropTypes from 'prop-types'

const Froms = (props) =>(
    <div>
        <input 
        type="text"
        value={props.newUserName}
        onChange={props.newUserChangeHandler}
        />
        <button>
            Add User!
        </button>
    </div>
)


Froms.propsType ={
    newUserName: PropTypes.string.isRequired
}


export default Froms