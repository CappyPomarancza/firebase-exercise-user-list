import React from 'react'
import Default from './Default'
import Loading from './Loading'
import List from './List'
import mapObjectToArray from '../utils'

class UserList extends React.Component {
    state = {
        users: null,
        isLoadingUsers: false,
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



    render() {
        return (
            <div>
                {
                    this.state.isLoadingUsers ?
                        <Loading />
                        :
                        this.state.users ?
                            <List

                            users={this.state.users}
                            
                            />
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