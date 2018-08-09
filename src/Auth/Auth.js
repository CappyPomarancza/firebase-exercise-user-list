import React from 'react'
import LogInForms from './LogInForms'
import { auth } from '../firebaseConfig'
import { googleProvider } from '../firebaseConfig'


class Auth extends React.Component {



    componentDidMount(){
        auth.onAuthStateChanged(user => {
            if(user){
                this.setState({
                    isLoggendIn: true
                })
            }else{
                this.setState({
                    isLoggendIn: false
                })
            }
        })
    }
    state = {
        isLoggendIn: false
    }
    onLogInClickHandler = () =>{
        auth.signInWithPopup(googleProvider)
        .catch(() => alert ('Błąd Logowania Kasztanie!'))
    }
        

    render() {
        return (
            <div>
                {
                    this.state.isLoggendIn ?
                        this.props.children
                        :
                        < LogInForms
                            onLogInClickHandler={this.onLogInClickHandler} />
                }
            </div >
        )
    }
}

export default Auth 