import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../../../actions/profileActions'
import Spinner from "../../components/Spinner";
import CHeader from "../../components/Header";
import NavLeft from "../../components/NavLeft";
import Sider from "antd/es/layout/Sider";
import Layout, {Content, Footer} from "antd/es/layout/layout";

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
                        <Layout className="admin-wrapper">
                            <Sider className="nav" trigger={null} collapsible collapsed={this.props.layout.collapsed}>
                                <NavLeft/>
                            </Sider>
                            <Layout className="main-wrapper">
                                <CHeader />
                                <Content className="content">
                                    { this.props.children }
                                </Content>
                                <Footer className="footer">
                                    <p>Copyright © 2021</p>
                                </Footer>
                            </Layout>
                        </Layout>
                    </>
                )
            } else {
                // User is logged in but has no profile
                dashboardContent = (
                    <div>
                        <p>Copyright © 2021</p>
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
    auth: state.auth,
    layout: state.layout
});

export default connect(mapStateToProps, {getCurrentProfile})(Dashboard);
