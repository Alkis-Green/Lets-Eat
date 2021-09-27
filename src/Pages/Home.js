import React from 'react';
import Recipes from '../Containers/Recipes/Recipes';

const Home = () => {
    
    return (
        <div>
            <h1>Welcome</h1>
            <button>Sign Out</button>
            <Recipes />
        </div>
    );
};

export default Home;