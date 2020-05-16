import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function CreateRecipeForm(props) {
    const [info, setInfo] = useState('');
    // const [ingredientsList, setIngredientsList] = useState([]);
    const [tagsList, setTagsList] = useState([]);
    const [title, setTitle] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [direction, setDirection] = useState('');
    const [quantity, setQuantity] = useState('');
    const [servings, setServings] = useState('');
    const [cooking_time, setCooking_time] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState('');


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tags')
            .then(response => {
                console.log(response.data.data);
                setTagsList(response.data.data);
            })
            .catch(error => {
                console.log(error)
            });

    }, []);


    const ingredList = props.ingredientsList.map((item, index) => {
        return (
            <option key={index}>{item.ingredient}</option>
        )
    });

    const tagList = tagsList.map((item, index) => {
        return (
            <option key={index}>{item.category}</option>
        )
    });

    const [numRows, setNumRows] = useState(1);

    let ingredientRows = [];
    for (let i = 0; i < numRows; i++) {
        let inputIngredient = "inputIngredient" + i;
        let inputQuantity = "inputQuantity" + i;
        ingredientRows.push(
            <div className="form-group row">
                <label for={inputIngredient} className="col-sm-2 col-form-label">Ingredients</label>
                <div className="col-sm-6">
                    <select type="dropdown" className="form-control" id={inputIngredient} placeholder="Choose an ingredient">
                        <option>select</option>
                        {ingredList}
                    </select>

                </div>
                <label for={inputQuantity} className="col-sm-2 col-form-label">Quantity</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" id={inputQuantity} placeholder="Quantity"></input>
                </div>
            </div>
        )
    }

    const createRecipe = (e) => {
        e.preventDefault();
        console.log('createRecipe');
        let ingredLength = ingredList.length;
        //build ingredient array
        // props.ingredientsList.map((item, index) => {
        //     item.ingredient

        //     let ingredArray = [];
        //     for (let i = 0; i < ingredLength; i++) {
        //         ingredArray.push(item.ingredient)
        //     }
        //     console.log(ingredList);
        //     console.log(ingredArray);
        // })
        //look thru the form for ingredientN elements
        //add an object to the array for each ingrenientN element
        const info = {
            title: title,
            ingredients: [{ 'id': 1, 'quantity': '3cups' },],

            directions: direction,
            servings: servings,
            cooking_time: cooking_time,
            image: image,
            tags: tags

        }
        console.log(info);
        axios.post('http://127.0.0.1:8000/api/createform', info)
            .then(response => {
                setInfo(response.data)
                console.log(response.data);
            })
            .catch(error => {
                console.log(error)
            });
    }


    return (
        <div className="row text-center">
            <div className="col-10 offset-1">
                <br></br>
                <h4>Create Your Own Recipe:</h4>
                <br></br>
                <form onSubmit={createRecipe}>
                    <div className="form-group row">
                        <label for="inputTitle" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="inputTitle" placeholder="Title" value={title}></input>
                        </div>
                    </div>

                    {ingredientRows}

                    <div onClick={() => setNumRows(numRows + 1)} type="submit" class="btn btn-secondary my-1">Add Ingredient</div>


                    <div className="form-group row">
                        <label for="inputDirections" className="col-sm-2 col-form-label">Directions</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => setDirection(e.target.value)} value={direction} type="text" className="form-control" id="inputDirections" placeholder="Directions"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputServings" className="col-sm-2 col-form-label">Servings</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => setServings(e.target.value)} value={servings} type="text" className="form-control" id="inputServings" placeholder="Servings"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputCookingTime" className="col-sm-2 col-form-label">Cooking Time</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => setCooking_time(e.target.value)} value={cooking_time} type="text" className="form-control" id="inputCookingTime" placeholder="Cooking Time"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="image" className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => setImage(e.target.value)} value={image} type="inputImage" className="form-control" id="inputImage" placeholder="Image"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputTags" className="col-sm-2 col-form-label">Tags</label>
                        <div className="col-sm-6">
                            <select onChange={(e) => setTags(e.target.value)} value={tags} type="dropdown" className="form-control" id="inputTags" placeholder="Tags">
                                <option>select</option>
                                {tagList}
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>

                </form>
            </div>
        </div>

    )
}