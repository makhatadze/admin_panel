import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from "antd";
import menuConfig from "../config/menuConfig";
import './index.scss';
import Icon from "@ant-design/icons";

const { SubMenu, Item } = Menu;
class NavLeft extends Component{
    componentWillMount() {
        const menuNodeTree = this.renderMenu(menuConfig);
        this.setState({
            menuNodeTree,
            pathname: this.props.location.pathname
        });
    }

    renderMenu (data)  {
        return data.map((item) => {
            if(item.children){
                return (
                    <SubMenu title={
                        <span>
                                    { item.icon && <Icon type={ item.icon } /> }
                            <span>{ item.title }</span>
                                </span>
                    }
                             key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                );
            }
            return (
                <Item title={item.title} key={item.key}>
                    { item.isLevel ?
                        <NavLink to={item.key}>
                            { item.icon && <Icon type={item.icon}/> }
                            <span>{item.title}</span>
                        </NavLink>
                        :
                        <span>
                            { item.icon && <Icon type={item.icon}/> }
                            <span>{item.title}</span>
                        </span>
                    }
                </Item>
            );
        });
    }
    render() {
        return (
            <div className="nav-wrapper">
                <div className="logo">
                    <img src="http://127.0.0.1:8000/logo.svg" alt="logo"/>
                    {this.props.layout.collapsed ? '' : <h1>Admin</h1>}
                </div>
                <Menu theme="dark" defaultSelectedKeys={[this.state.pathname]}>
                    {/*@TODO translate this nodes.*/}
                    { this.state.menuNodeTree }
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    layout: state.layout
});

export default connect(mapStateToProps)(withRouter(NavLeft))