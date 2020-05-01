import React from "react";
 import Recipes from './Recipes';
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
                    allRecipes: response.data.data.title
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
            <>
          <Recipes /> 
          <p> {this.state.allRecipes}</p>
            </>
        )
    }
}

export default Main;