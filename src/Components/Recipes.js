import React from "react";

function Recipes(props) {
    return (
        <>
        <h1>Recipes</h1>
        <div className="card text-center"   >
            <div className="card-header"  >
                <h4>{props.title}</h4>
                <div className="card-body" >
                    <p className="card-text">
                        {props.ingredients}
                    </p>
                    <p className="card-text">
                        {props.directions}
                    </p>

                    <a> {props.nutrition_facts}</a>

                </div>
            </div>
        </div>
        </>
    )
}

export default Recipes;