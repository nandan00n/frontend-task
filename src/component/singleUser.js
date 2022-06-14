import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleuser } from '../store/actions/usersAction';


class singleUser extends Component {


    componentDidMount() {
        this.props.singleuser()
    }
    render() {
        const {sid}= this.props.suser
        
        console.log(sid, 'singleuser')      

        return (

            <div className='card-container'>
                {/* {suser.map(u => */}
                <h1>single</h1>
                <React.Fragment key={sid.id}>
                    <div className='cards'>
                        <img src={sid.avatar} alt="avatar" />
                        <h6 >{sid.first_name}</h6>
                        <h6 >{sid.email}</h6>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ suser: state.suser.suser })

export default connect(mapStateToProps, { singleuser })(singleUser)