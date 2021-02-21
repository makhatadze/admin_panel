import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getUsers} from "../../../../actions/userAction";
import {withTranslation} from "react-i18next";
import {toast, ToastContainer} from "react-toastify";
import Spinner from "../../components/Spinner";

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            users: {
                loading: false
            },
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.getUsers();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.users) {
            this.setState({users: nextProps.users})
        }


    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        const {t} = this.props;
        let userListContent;
        if (this.state.users.loading) {
            console.log('loading')
            userListContent =  <Spinner />
        } else {
            userListContent = (
                <h1>Users comee</h1>
            )
        }
        return (
            <>
                <ToastContainer/>
                {userListContent}
            </>
        );
    }
}

UserList.propTypes = {
    getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    users: state.users,
});


export default withTranslation()(connect(mapStateToProps, {getUsers})(UserList))
