import React, { useState, useEffect, Fragment } from 'react';
import Recipe from './Recipe';
import SubCategoryType from './SubCategoryType';
import axios from 'axios';

// { recipes: [] }
function Main() {
    const [recipes, setRecipes] = useState( [] );
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        
        const fetchData = async () => {
            const result = await axios.get('http://127.0.0.1:8000/api/recipes');
            setRecipes(result.data.data);
            console.log(result.data.data);
            setIsLoading(false);
        }
        
        fetchData();
    }, []);

    console.log(recipes);

        return (
            
            <Fragment>

            {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    recipes.map((recipe, index) => (
                            <div className="row"
                                     key={index}>
                                <Recipe
                                   
                                    title={recipe.title}
                                    image={recipe.image}
                                    servings={recipe.servings}
                                    cooking_time={recipe.cooking_time}
                                    id ={recipe.id}
                                    directions={recipe.directions}
                                    tags={recipe.tags}
                                    ingredients={recipe.ingredients}
                                    user={recipe.user}        
                                />
                            </div>
                            )
                        )
                    
                )
            }
            </Fragment>
        );
}

export default Main;

