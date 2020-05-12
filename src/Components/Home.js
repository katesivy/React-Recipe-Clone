import React from "react";
import OptionsPage from "./OptionsPage";

export default function Home(props) {
    return (
        <>
            <div className="jumbotron jumbotron-fluid" id="jumbContainer">
                <div className="container" >
                    <img src="https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="card-img-top" id="jumbotron" alt="..." ></img>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Let's make some food!</h1>
                    <p className="lead">~find a recipe by category or ingredient or create your own~</p>
                </div>
            </div>

            <div className="row p-3" id="cardRow">
{/* if cards are clicked, display recipeList */}
             <OptionsPage options={props.optionsArray} goTo={props.setUrl}/>
              
            </div>
        </>

    );

}