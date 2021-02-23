import React, {Component} from 'react';
import {Layout, Menu, Modal, Popover} from 'antd';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import './index.scss'
import {sliderToggle} from "../../../../actions/layout";
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next";
import {logoutUser} from "../../../../actions/authActions";

const {Header} = Layout;
const {Item} = Menu;

class CHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            layout: {}
        };

        this.toggle = this.toggle.bind(this);
        this.menuClick = this.menuClick.bind(this);

    }

    componentDidMount() {
        this.setState({layout: this.props.layout});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.layout) {
            this.setState({layout: nextProps.layout});
        }
    }

    toggle() {
        this.props.sliderToggle(!this.state.layout.collapsed);
    }

    menuClick({key}) {
        if (key === 'logout') {

            Modal.confirm({
                title: 'Are you sure? You want to log out?',
                okText: 'OK',
                cancelText: 'Cancel',
                centered: true,
                onOk: () => {
                    this.props.logoutUser();
                    return window.location.href = '/admin/login';
                }
            });
        }
    }


    render() {
        const {layout} = this.state;
        const {profile} = this.props.profile;
        const {t} = this.props;
        return (
            <Header className="header">
                {layout.collapsed ? (
                        <MenuUnfoldOutlined className="trigger" onClick={this.toggle}/>
                    )
                    : (
                        <MenuFoldOutlined className="trigger" onClick={this.toggle}/>
                    )}
                <Popover content={
                    <Menu selectable={false} onClick={this.menuClick}>
                        <Item key="logout">{t('logout')}</Item>
                    </Menu>
                }
                         placement="bottom"
                         trigger="hover"
                >
                    <span className="user">hi，{profile.user.name}</span>
                    {/*<Avatar src={require('./../../assets/author.jpg')}></Avatar>*/}
                </Popover>
            </Header>
        )
    }
}

CHeader.propTypes = {
    sliderToggle: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    layout: state.layout,
    profile: state.profile
});


export default withTranslation()(connect(mapStateToProps, {sliderToggle, logoutUser})(withRouter(CHeader)))