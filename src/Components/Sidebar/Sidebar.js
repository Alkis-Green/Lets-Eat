import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div className={classes.SidebarContainer} style={{
            opacity: isOpen ? '100%' : '0',
            top: isOpen ? '0' : '-100%'
        }}>
            <div className={classes.IconsWrap} onClick={ toggle }>
                <FaTimes className={classes.CloseIcon} />
            </div>
            <div className={classes.SidebarWrapper}>
                
                <p>Lets Eat!</p>
                <ul className={classes.LinkList}>
                    <Link className={classes.Links} to="/login"></Link>
                    <Link className={classes.Links} to="/signup"></Link>
                </ul>
                <div className={classes.SideBtnWrap}>
                <button style={{ display: isOpen ? 'flex' : 'none', }}
                    className={classes.SidebarBtn}>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;