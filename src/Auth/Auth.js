import React from 'react'
import LogInForms from './LogInForms'
import { auth } from '../firebaseConfig'
import { googleProvider } from '../firebaseConfig'


class Auth extends React.Component {

    state = {
        isLoggendIn: false,
        logInEmail: '',
        logInPassword: '',
        signUpEmail: '',
        signUpPassword: '',
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
        onEmailChangedHandler: (event) => {
            this.setState({
                logInEmail: event.target.value
            })
        },
        onPasswordChangedHandler: (event) => {
            this.setState({
                logInPassword: event.target.value
            })
        },
        onLogInByEmailAndPasswordClickHandler: () => {
            auth.signInWithEmailAndPassword(this.state.logInEmail, this.state.logInPassword)
                .catch((error) => {
                    console.log(error)
                    alert('Błąd logowania!')
                })
        }

    }

    signInFunction = {
        onEmailChangedHandler: (event) => {
            this.setState({
                signUpEmail: event.target.value
            })
        },
        onPasswordChangedHandler: (event) => {
            this.setState({
                signUpPassword: event.target.value
            })
        },
        onSignUpEmailAndPasswordClickHandler: () => {
            auth.createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword)
                .catch((error) => alert('Błąd rejestracji!: ', error))

        }


    }

    render() {
        return (
            <div>
                {
                    this.state.isLoggendIn ?
                        <div>
                            <div>
                                <button
                                    onClick={() => auth.signOut()}
                                >
                                    Log out!
                            </button>
                            </div>
                            {this.props.children}
                        </div>

                        :
                        < LogInForms
                            onLogInByGoogleClickHandler={this.onLogInByGoogleClickHandler}
                            logInProps={{
                                emailValue: this.state.logInEmail,
                                passwordValue: this.state.logInPassword,
                                onEmailChangedHandler: this.logInFunction.onEmailChangedHandler,
                                onPasswordChangedHandler: this.logInFunction.onPasswordChangedHandler,
                                onLogInByEmailAndPasswordClickHandler: this.logInFunction.onLogInByEmailAndPasswordClickHandler
                            }}
                            signInProps={{
                                emailValue: this.state.signUpEmail,
                                passwordValue: this.state.signUpPassword,
                                onEmailChangedHandler: this.signInFunction.onEmailChangedHandler,
                                onPasswordChangedHandler: this.signInFunction.onPasswordChangedHandler,
                                onSignUpnByEmailAndPasswordClickHandler: this.signInFunction.onSignUpEmailAndPasswordClickHandler,
                            }}

                        />
                }
            </div >
        )
    }
}

export default Auth 