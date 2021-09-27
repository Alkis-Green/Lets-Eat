import classes from './SignUp.module.css';

export const SignUp = () => {

    // const location = useLocation();

    return (
        <div className={classes.Container}>
            <div className={classes.login}>
                <div class={classes.loginHeader}>
                    <h1>Sign up</h1>
                    <h2>Only with email and password</h2>
                </div>
                    <form className={classes.loginForm} onSubmit={handleSubmit}>
                        <h3>Email</h3>
                        <input type="text" placeholder="Email" required/>
                        <h3>Password</h3>
                        <input type="password" placeholder="Password" required/>
                    <button type="submit" className={classes.loginButton}>Sign up</button>
                    </form>
            </div>
        </div>   
    );
  
}