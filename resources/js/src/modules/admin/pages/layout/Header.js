import React, {useState} from "react";
import {Menu} from 'antd';
import {
    AppstoreOutlined, LogoutOutlined,
    SettingOutlined,
} from '@ant-design/icons';

import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';

const {SubMenu, Item} = Menu; // Menu.Submenu Menu.Item

const Header = () => {
    const [current, setCurrent] = useState('dashboard');
    let {profile} = useSelector((state) => ({...state}))

    let dispatch = useDispatch();
    let history = useHistory();


    const handleClick = (e) => {
        setCurrent(e.key);
    }

    const logout = () => {
        dispatch({
            type: "LOGOUT",
            payload: null
        });
        history.push('/login')
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Item key="dashboard" icon={<AppstoreOutlined/>}>
                <Link to="/admin/dashboard">Dashboard</Link>
            </Item>

            <SubMenu key="SubMenu" icon={<SettingOutlined/>} title={profile.profile.user.name} className="float-right">
                <Item icon={<LogoutOutlined/>} onClick={logout}>
                    Logout
                </Item>
            </SubMenu>
        </Menu>
    )
}

export default Header;
