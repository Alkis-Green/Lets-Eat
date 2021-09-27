import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import classes from './Navbar.module.css';



const Navbar = ({ toggle }) => {
    

    return (
        <div>
            <nav className={classes.Navbar}>
                <Link className={ classes.Links} to='/'>
                    <p>Lets Eat!</p>
                </Link>
                <FaBars className={classes.Bars} onClick={ toggle } />
                <div className={classes.NavMenu}>
                    {/* <Link className={classes.NavLinks} to="/">{ user ? 'CLick' : null }</Link> */}
                    {/* <Link className={classes.NavLinks} to="/">{ user ? 'CLick' : null }</Link> */}
                </div>
                <div className={classes.NavBtn}>
                    <Link className={classes.NavBtnLinks} to='/login'>Sign In</Link>
                    <Link className={classes.NavBtnLinksSignUp} to='/signup'>Sign Up</Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;