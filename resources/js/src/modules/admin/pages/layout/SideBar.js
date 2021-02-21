import React from 'react';
import {Link} from 'react-router-dom';


const SideBar = () => (
    <nav>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link to="/admin/products" className="nav-link">Product</Link>
            </li>
        </ul>
    </nav>
)

export default SideBar;
