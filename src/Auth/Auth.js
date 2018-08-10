import React from 'react'
import LogInForms from './LogInForms'
import { auth } from '../firebaseConfig'
import { googleProvider } from '../firebaseConfig'


class Auth extends React.Component {

    state = {
        isLoggendIn: false,
        logInEmail: '',
        logInPassword: '',

    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isLoggendIn: true
                })
            } else {
                this.setState({
                    isLoggendIn: false
                })
            }
        })
    }

    onLogInByGoogleClickHandler = () => {
        auth.signInWithPopup(googleProvider)
            .catch((error) => alert('error: ', error))
    }
    

    logInFunction = {
        onEmailChangedHandler : (event) => {
            this.setState({
                logInEmail: event.target.value
            })
        },
        onPasswordChangedHandler : (event) => {
            this.setState({
                logInPassword: event.target.value
            })
        },
        onLogInByEmailAndPasswordClickHandler : () => {
            auth.signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPassword)
                .catch((error) => {
                    console.log(error)
                    alert('Błąd logowania!')
                })
        }

    }

    signInFunction = {

    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggendIn ?
                        this.props.children
                        :
                        < LogInForms
                            logInProps={{
                                onLogInByGoogleClickHandler: this.onLogInByGoogleClickHandler,
                                emailValue: this.state.logInEmail,
                                passwordValue: this.state.logInPassword,
                                onEmailChangedHandler: this.logInFunction.onEmailChangedHandler,
                                onPasswordChangedHandler: this.logInFunction.onPasswordChangedHandler,
                                onLogInByEmailAndPasswordClickHandler: this.logInFunction.onLogInByEmailAndPasswordClickHandler
                            }}
                            // signInProps={{
                            //     emailValue: props.,
                            //     passwordValue: props.,
                            //     onEmailChangedHandler: props.,
                            //     onPasswordChangedHandler: props.,
                            //     onSignUpClickHandler: props.,
                            // }}

                        />
                }
            </div >
        )
    }
}

export default Auth 