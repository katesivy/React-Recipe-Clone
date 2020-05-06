import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
import axios from 'axios';

function Main() {
    const [recipes, setRecipes] = useState([]);
    
    // const [allDirections, getDirections] = useState([]);


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/recipes')
            .then(response => {
                setRecipes(response.data.data)
            });
    }, [recipes]
    );
    console.log(recipes);
    const recipesMap = recipes.map((recipe, index) => {
        return (
            <Recipe key={index}
                title={recipe.title}
                image={recipe.image}
                servings={recipe.servings}
                cooking_time={recipe.cooking_time}
                id ={recipe.id}
            />
        )
    });
    return (
        <div className="row">
            {recipesMap}
        </div>
    );
}

export default Main;