import { useState } from 'react';
import classes from './SignIn.module.css';
import { Link } from 'react-router-dom';
// import { useLocation  } from 'react-router-dom';

const SignIn = () => {
//use location to redirect where i want.
    // const location = useLocation();


    return (
        <div className={classes.Container}>
            <div className={classes.login}>
                <div class={classes.loginHeader}>
                    <h1>Login Or Sign up</h1>
                </div>
                    <form className={classes.loginForm} onSubmit={handleSubmit}>
                        <h3>Username</h3>
                        <input type="text" value={setEmail} onChange={handleChange} required/>
                        <h3>Password</h3>
                        <input type="password" value={setPass} onChange={handlePass} required/>
                    <input type="submit" value="Sign in" className={classes.loginButton}></input>
                    <span>or</span>
                        <Link to="/signup" className={classes.signUp}>Sign Up!</Link>
                    </form>
            </div>
        </div>    
    );
};

export default SignIn;