import React from "react";
import Recipes from './Recipes';
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allRecipes: [],
            allDirections: []
        }
    }
   async componentDidMount() {
        await this.getRecipes()
         await this.getDirections()
   }

   getRecipes() {
        let result = axios.get('http://127.0.0.1:8000/api/recipes')
            .then(response => {
                console.log(result);
                return response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            })
        this.setState({
            allRecipes : result
        });

    }
    
   getDirections() {
        let result = axios.get('http://127.0.0.1:8000/api/directions')
            .then(response => {
                console.log(result);
                return response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            })
        this.setState({
            allDirections : result
        });

    }


    render() {



        // const recipeInfo = this.state.allRecipes.map((allRecipes, index) => {
        //     return <>

        //         <Recipes key={index} 
        //             title={allRecipes.title}
        //             image={allRecipes.image}
        //             servings={allRecipes.servings}
        //             cooking_time={allRecipes.cooking_time}
        //         />
                {/* <Directions key={index} 
                    direction={allRecipes.direction}    
                /> */}

            // </>
        // });

        return (
            // <>
            //     <div className="row">
            //         {recipeInfo}
            //     </div>
            // </>

<h1>hello</h1>
        );

     }



}

export default Main;