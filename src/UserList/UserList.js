import React from 'react'
import Default from './Default'
import Loading from './Loading'
import List from './List'
import mapObjectToArray from '../utils'
import Forms from './Forms'

class UserList extends React.Component {
    state = {
        users: null,
        isLoadingUsers: false,
        newUserName: '',
    }

    loadUsers = () => {
        this.setState({
            isLoadingUsers: true
        })
        fetch('https://todo-e8a15.firebaseio.com/cappy-users/.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: mapObjectToArray(data),
                    isLoadingUsers: false,
                })
            })
    }
    newUserChangeHandler = (event) => {
        this.setState({
            newUserName: event.target.value,
        })

    }
    onAddNewUserClick = () => {

        const request = {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.newUserName,
            })
        }

        fetch('https://todo-e8a15.firebaseio.com/cappy-users/.json'
            , request)
            .then(response => {
                this.loadUsers()
                this.setState({
                    newUserName: ''
                })
            })

    }
    onEditUserHandler = (key, newName) => {
        const request = {
            method: 'PATCH',
            body: JSON.stringify({
                name: newName
            })
        }

        fetch(`https://todo-e8a15.firebaseio.com/cappy-users/${key}.json`
            , request)
            .then(response => {
                this.loadUsers()
            })
    }


    render() {
        return (
            <div>
                {
                    this.state.isLoadingUsers ?
                        <Loading />
                        :
                        this.state.users ?
                            <div>
                                <Forms
                                    newUserName={this.state.newUserName}
                                    newUserChangeHandler={this.newUserChangeHandler}
                                    onAddNewUserClick={this.onAddNewUserClick}
                                />

                                <List
                                    onEditUserHandler={this.onEditUserHandler}

                                    users={this.state.users}

                                />
                            </div>
                            :
                            <Default
                                clickHandler={this.loadUsers}
                                label={'Click!'}
                            />
                }
            </div>
        )
    }
}

export default UserList