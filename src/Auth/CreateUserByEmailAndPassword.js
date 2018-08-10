import React from 'react'

const CreateUserByEmailAndPAssword = (props) => (
    <div>
        <div>
            <input
                type='email'
                placeholder={'your email'}
                onChange={props.onEmailChangedHandler}
                value={props.emailValue}
            />
            <div>
                <input
                    type='password'
                    onChange={props.onPasswordChangedHandler}
                    value={props.passwordValue}
                    placeholder={'your password'}
                />
            </div>
            <div>
                <button
                onClick={props.onSignUpClickHandler}
                >
                    LOGIN
                 </button>
            </div>
        </div>


    </div>
)

export default CreateUserByEmailAndPAssword 