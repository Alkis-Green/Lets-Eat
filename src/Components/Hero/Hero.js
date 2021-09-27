import React from 'react';
import classes from './Hero.module.css'
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        
        <div className={classes.HeroContainer}>
            <div className={classes.Container}>
                    <h1 className={classes.HeadLine}>There's no "We" <br /> in food</h1>
                    <p className={classes.SecondaryHeadline}>Explore through thousands of the greatest recipes ever!</p>
                <div className={classes.Btn}>
                    <span>To see the recipes please</span>
                    <Link className={classes.button} to="/login">Sign in</Link> 
                </div>
            </div>
        </div>
            
        
    );
};

export default Hero;