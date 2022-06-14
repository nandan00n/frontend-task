import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers, singleuser } from '../store/actions/usersAction';
import { Link } from 'react-router-dom';



class Users extends Component {

    componentDidMount() {
        this.props.getUsers()
        this.props.singleuser()
    }

    render() {
        const { users } = this.props.users
        // const { suser } = this.props.suser
        // console.log(suser, 'hello')   

              const userslist=  users.map(u =>

                        <div className='cards' key={u.id}>
                            <img src={u.avatar} alt="avatar" />
                            <h6 >{u.first_name}</h6>
                            <h6 >{u.email}</h6>
                            <Link to={`/users/${u.id}`} className="link-btn">
                            <button onClick={()=>singleuser(u)}>{u.id}</button>
                            </Link>
                        </div>
                )

        return (
            <div className='card-container'>
                {userslist}
                </div>
        )
    }
}

const mapStateToProps = (state) => ({ users: state.users })

function mapDispatchToProps(dispatch) {
    return {
        getUsers: (users) => dispatch(getUsers(users)),
        singleuser: (id) => dispatch(singleuser(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)