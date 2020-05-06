import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recipe(props) {
    const [directions, setDirections] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/directions/' + props.id)
            .then(response => {
                setDirections(response.data.data)
            });
    }, [directions]
    );
    console.log(directions);
    const directionsMap = directions.map((direction, index) => {
        return (
            <li key={index}
                title={direction.title}
                image={direction.image}
                servings={direction.servings}
                cooking_time={direction.cooking_time}
            />
        )
    });
    return (
        <div className="col-4 p-2">
            <div className="card "    >
                <div className="card-header"  >
                    <h4>{props.title}</h4>
                    <div className="card-body" >
                        <p className="card-text">
                            <img src={props.image} className="card-img" id="pic" alt="pic"></img>
                        </p>
                        <p>Directions: {directionsMap}</p>
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
    )
}

export default Recipe;