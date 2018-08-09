import React from 'react'
import Default from './Default'
import Loading from './Loading'
import List from './List'
import mapObjectToArray from '../utils'
import Forms from './Forms'
import Shearch from './Shearch'

import { database } from '../firebaseConfig'

class UserList extends React.Component {
    state = {
        users: null,
        isLoadingUsers: false,
        newUserName: '',
        searchPharse: '',
    }

    initUsersSync = () => {
        this.setState({
            isLoadingUsers: true
        })
        // fetch('https://todo-e8a15.firebaseio.com/cappy-users/.json')
        database.ref('/cappy-users')
            .on(
                'value',
                snapshot => {
                    const data = snapshot.val()
                    this.setState({
                        users: mapObjectToArray(data),
                        isLoadingUsers: false,
                    })
                }
            )
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
                this.setState({
                    newUserName: ''
                })
            })

    }
    onEditUserHandler = (key, newName) => {
        database.ref(`/cappy-users/${key}`)
            .update({
                name: newName
            })





        //     const request = {
        //         method: 'PATCH',
        //         body: JSON.stringify({
        //             name: newName
        //         })
        //     }

        //     return fetch(`https://todo-e8a15.firebaseio.com/cappy-users/${key}.json`
        //         , request)
        //         .then(response => {
        //         })
    }
    onShearchPharseChanged = (event) => {
        this.setState({
            searchPharse: event.target.value
        })
    }

    render() {
        const filteredUsers = this.state.users && this.state.users
            .filter(user => user.name.indexOf(this.state.searchPharse) !== -1)

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
                                <Shearch
                                    searchPharse={this.state.searchPharse}
                                    onShearchPharseChanged={this.onShearchPharseChanged}
                                />
                                <List
                                    onEditUserHandler={this.onEditUserHandler}

                                    users={filteredUsers}

                                />
                            </div>
                            :
                            <Default
                                clickHandler={this.initUsersSync}
                                label={'Click!'}
                            />
                }
            </div>
        )
    }
}

export default UserList