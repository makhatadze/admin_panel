import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../../../actions/profileActions'
import Spinner from "../../components/Spinner";
import Header from "../layout/Header";
import SideBar from "../layout/SideBar";
import Layout, {Content} from "antd/es/layout/layout";
import Client from "../../../client/Client";
import PrivateRoute from "../../../../routes/PrivateRoute";
import ProductList from "../product/ProductList";

class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        const {user} = this.props.auth;
        const {profile, loading} = this.props.profile;

        let dashboardContent;

        if (profile === null || loading) {
            dashboardContent = <Spinner/>;
        } else {
            // Check if logged in user has profile data
            if (Object.keys(profile).length > 0) {
                dashboardContent = (
                    <>
                        <Header />
                        <SideBar />
                    </>
                )
            } else {
                // User is logged in but has no profile
                dashboardContent = (
                    <div>
                        <Header />
                        <p className="lead text-muted">Welcome {user.name}</p>
                        <p>You have not yet setup a profile, please add some info</p>
                        <Link to="/create-profile" className="btn btn-lg btn-info">
                            Create Profile
                        </Link>
                    </div>
                );
            }
        }

        return (
            <>
                {dashboardContent}
            </>
        );
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
