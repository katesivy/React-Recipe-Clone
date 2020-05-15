import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Profile(props) {
    const [info, setInfo] = useState('');
    const [title, setTitle] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [direction, setDirection] = useState('');
    const [quantity, setQuantity] = useState('');
    const [servings, setServings] = useState('');
    const [cooking_time, setCooking_time] = useState('');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState('');
    console.log(props.recipes)

    const mappedIngredients = props.recipes.map((recipe, index) => {
        return (
            recipe.ingredients
        )
    });
    const ingredients = mappedIngredients.map((item, index) => {
        item.map((ingredient, index) => {
        return (
            ingredient
        )
    });
});
// });
    // const list = item.map((list, index) => {
    //     return (
    //         list
    //     )
    // });
    console.log(mappedIngredients);
     console.log(ingredients);
    //  console.log(list);

    // const [numRows, setNumRows] = useState(1);

    // let ingredientRows = [];
    // for (let i = 0; i < numRows; i++) {
    //     ingredientRows.push(
    //         <div className="form-group row">
    //             <label for="inputIngredients1" className="col-sm-2 col-form-label">Ingredients</label>
    //             <div className="col-sm-6">
    //                 <select onChange={(e) => setIngredient(e.target.value)} value={ingredient} type="dropdown" className="form-control" id="inputIngredients" placeholder="Choose and ingredient">

    //                     <option>2</option>
    //                     <option>3</option>
    //                     <option>4</option>
    //                 </select>
    //             </div>
    //             <label for="inputQuantity1" className="col-sm-2 col-form-label">Quantity</label>
    //             <div className="col-sm-2">
    //                 <input onChange={(e) => setQuantity(e.target.value)} type="text" value={quantity} className="form-control" id="inputQuantity1" placeholder="Quantity"></input>
    //             </div>
    //         </div>
    //     )
    // }

    const createRecipe = (e) => {
        e.preventDefault();
        console.log('createRecipe');
        const info = {
            title: title,
            // ingredient: ingredient,
            // quantity: quantity,
            directions: direction,
            servings: servings,
            cooking_time: cooking_time,
            image: image,
            // tags: tags
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
        <>
            <div className="row text-center">
                <div className="col-10 offset-1">
                    <h2>Welcome!</h2>
                    <br></br>
                    <h4>Create Your Own Recipe:</h4>
                    <form onSubmit={createRecipe}>
                        <div className="form-group row">
                            <label for="inputTitle" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input onChange={(e) => setTitle(e.target.value)}  type="text" className="form-control" id="inputTitle" placeholder="Title" value={title}></input>
                            </div>
                        </div>

                        {/* {ingredientRows}

                        <div onClick={() => setNumRows(numRows + 1)} type="submit" class="btn btn-primary my-1">Add Ingredient</div> */}


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

                        {/* <div className="form-group row">
                            <label for="inputTags" className="col-sm-2 col-form-label">Tags</label>
                            <div className="col-sm-6">
                                <select onChange={(e) => setTags(e.target.value)} value={tags} type="dropdown" className="form-control" id="inputTags" placeholder="Tags">

                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div> */}
                        <button type="submit" className="btn btn-secondary">Submit</button>

                    </form>
                </div>
            </div>
        </>
    )
}