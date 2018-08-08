import React from 'react'
import PropTypes from 'prop-types'

class User extends React.Component {


    render() {
        return (
            <div>
                {this.props.user.name}
                < button > EDIT</button>
            </div>
        )
    }
}

User.propTypes = {
        user: PropTypes.object.isRequired
    }
export default User