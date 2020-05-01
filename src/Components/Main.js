import React from "react";
//  import Recipes from './Recipes';
import axios from 'axios';




class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allRecipes: []
        }
    }

    async componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/recipes')
            .then(response => {
                this.setState({
                    allRecipes: response.data.data
                })
                console.log(response);

            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });

    }


    render() {
        return (
       
        <div className="row mt-lg-5 ml-lg-5 mr-lg-5" >
            {this.state.allRecipes.map((allRecipes, index) => (
           <div className="row ">
                <div className="card text-center  "   >
                    <div className="card-header col-12 p-5 border border-dark"  >
               
                        <h4>Title: {allRecipes.title}</h4>
                        <div className="card-body" >
                            <p className="card-text">
                                Ingredients: {allRecipes.ingredients}
                            </p>
                            <p className="card-text">
                                Directions: {allRecipes.directions}
                            </p>
                            <p> Nutrition Facts: {allRecipes.nutrition_facts}</p>
                    </div>
                
                        </div>
                    </div>
                </div>
            ))}
        </div>
       
        );
    }





}

export default Main;