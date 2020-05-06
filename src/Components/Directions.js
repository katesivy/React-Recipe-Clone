import React from "react";

function Directions(props) {
    return (
        <>
                <div className="col-4 p-2">
                    <div className="card "    >
                        <div className="card-header"  >
                            <h4>{props.title}</h4>
                            <div className="card-body" >
                                <p className="card-text">
                                <img src={props.image} className="card-img" id="pic" alt="pic"></img>
                                </p>
                                <p className="card-text">
                                   Servings: {props.servings}
                                </p>
                                <p className="card-text">
                                   Cooking Time: {props.cooking_time}
                                </p>

                               

                            </div>
                        </div>
                    </div>
                </div>
        
        </>
    )
}

export default Directions;