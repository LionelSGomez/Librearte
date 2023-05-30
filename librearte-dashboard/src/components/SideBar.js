import React from 'react';
import { Link } from 'react-router-dom';

import image from '../assets/images/logo.webp';

function SideBar() {
    return (
        <React.Fragment>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="librearte" src={image} alt="Librearte" />
                    </div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-database"></i>
                        <span> Dashboard - Librearte</span></Link>
                </li>
                <hr className="sidebar-divider" />
                <li className="nav-item">
                    <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/ContentRowProducts">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Paneles</span></Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            
        </React.Fragment>
    )
}
export default SideBar;