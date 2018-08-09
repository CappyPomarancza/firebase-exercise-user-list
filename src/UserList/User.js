import React from 'react'
import PropTypes from 'prop-types'

class User extends React.Component {
    state = {
        isEdited: false,
        userName: this.props.user.name
    }
    editToggle = () => {
        this.setState({
            isEdited: !this.state.isEdited,
            userName: this.props.user.name
        })
    }

    onUserNameChangeHandler = event => {
        this.setState({
            userName: event.target.value
        })
    }


    render() {
        return (
            this.state.isEdited ?
                <div>
                    <button
                        onClick={this.editToggle}
                    >
                        Canel!
                </button>
                    <input
                        type={'text'}
                        onChange={this.onUserNameChangeHandler}
                        value={this.state.userName}
                    />
                    <button
                        onClick={
                            () => {
                                this.props.onEditUserHandler(
                                    this.props.user.key,
                                    this.state.userName
                                )
                                this.editToggle()
                                
                            }
                        }
                    >
                        SAVE
                     </button>
                </div>
                :
                <div>
                    {this.props.user.name}
                    < button
                        onClick={this.editToggle}
                    >
                        EDIT
                    </button>
                </div>
        )
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired
}
export default User