import React from 'react'
import LoginByGoogle from './LoginByGoogle';
import LoginByEmailAndPAssword from './LoginByEmailAndPAssword';
import CreateUserByEmailAndPAssword from './CreateUserByEmailAndPassword';

const LogInForms = (props) => (
    <div>
        <LoginByGoogle
            onLogInClickHandler={props.onLogInByGoogleClickHandler}
        />
        <LoginByEmailAndPAssword
            emailValue={props.logInProps.emailValue}
            passwordValue={props.logInProps.passwordValue}
            onEmailChangedHandler={props.logInProps.onEmailChangedHandler}
            onPasswordChangedHandler={props.logInProps.onPasswordChangedHandler}
            onLogInClickHandler={props.logInProps.onLogInByEmailAndPasswordClickHandler}
        />
        {/* <CreateUserByEmailAndPAssword
            emailValue={props.signInProps.}
            passwordValue={props.signInProps.}
            onEmailChangedHandler={props.signInProps.}
            onPasswordChangedHandler={props.signInProps.}
            onSignUpClickHandler={props.signInProps.}
        /> */}

    </div>
)


export default LogInForms