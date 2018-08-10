import React from 'react'

const LoginByGoogle = (props) => (
    <div>
        <button
    onClick={props.onLogInClickHandler}
    >
        Login By Google!
    </button>
    </div>
)

export default LoginByGoogle