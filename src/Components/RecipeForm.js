import React, { useState, useEffect } from 'react';
import { Link, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function RecipeForm(props) {
    // State variables 
    const [title, setTitle] = useState('');
    const [direction, setDirection] = useState('');
    const [servings, setServings] = useState('');
    const [cooking_time, setCooking_time] = useState('');
    const [image, setImage] = useState('');
    const [tagRows, setTagRows] = useState([]);
    const [ingredientRows, setIngredientRows] = useState([])
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    var userInfo = JSON.parse(localStorage.getItem("auth"));
    var lsId = JSON.parse(localStorage.getItem("id"));
    var lsRecipes = JSON.parse(localStorage.getItem("recipes"));
    var clickedRecipe = lsRecipes.find(item => item.id == lsId);

    useEffect(() => {
        console.log(clickedRecipe);
        var titleInfo = clickedRecipe ? clickedRecipe.title : title
        setTitle(titleInfo);
        var directionsInfo = clickedRecipe ? clickedRecipe.directions[0].direction : direction
        setDirection(directionsInfo);
        var servingsInfo = clickedRecipe ? clickedRecipe.servings : servings
        setServings(servingsInfo);
        var cookingTimeInfo = clickedRecipe ? clickedRecipe.cooking_time : servings
        setCooking_time(cookingTimeInfo);
        var imageInfo = clickedRecipe ? clickedRecipe.image : image
        setImage(imageInfo);

        var ingredArray = clickedRecipe ? clickedRecipe.ingredients : []
        var i = 0
        console.log(ingredArray)
        for (var item of ingredArray) {
            console.log(item)
            item.ingredient_id = JSON.stringify(item.id)
            item.quantity = item.pivot.quantity
            item.index = i
            i++
        }
        setIngredientRows(ingredArray)

        var tagArray = clickedRecipe ? clickedRecipe.tags : []
        i = 1

        for (var item of tagArray) {
            //  console.log(item)
            item.index = i
            i++
        }
        if (tagArray.length != 0 && ingredArray.length != 0) {
            // var tagInfo = clickedRecipe ? clickedRecipe.tags : []
            setTagRows(tagArray)

            setLoading(true)
        }
    }, [loading]
    )


    const addUserIngredient = () => {
        setIngredientRows([...ingredientRows, { index: ingredientRows.length, ingredient_id: 0, id: 0, pivot: { ingredient_id: 0, quantity: 0 }, quantity: 0 }])
    }

    const addTag = () => {
        setTagRows([...tagRows, { index: tagRows.length }])
    }

    const deleteTag = () => {
        // setTagRows([...tagRows, { index: tagRows.length -1 }])
    }
    const deleteIngredient = (e, i) => {
        console.log("clicked", i, e.target)
        let newIngredientRows = [...ingredientRows]
        // index is e.target.value
        var newIngredArray = ingredientRows.filter(item => item.index != i)    // remove ingredRows[index] (slice)
        // then setIngred Rows
         setIngredientRows([...newIngredArray])
    }

    function updateIngredientName(e, i) {
        let newIngredientRows = [...ingredientRows]
        console.log(ingredientRows, e.target.value)
        for (var item of newIngredientRows) {
            console.log("line 82", item, i)
            if (item.index == i) {
                console.log("found specific item", item, i)
                item.id = parseInt(e.target.value)
                item.ingredient_id = parseInt(e.target.value)
                item.pivot.ingredient_id = (e.target.value)
                item.ingredient = props.ingredientsList.find(obj => obj.id == parseInt(e.target.value)).ingredient

                break;
            }
        }
        setIngredientRows([...newIngredientRows])
        console.log("update ingredient id:", e.target.value, i, newIngredientRows)
    }


    function updateIngredientQuantity(e, i) {
        let newIngredientRows = [...ingredientRows]
        console.log(ingredientRows, e.target.value)
        for (var item of newIngredientRows) {
            if (item.index == i ) {
                item.quantity = e.target.value
                item.pivot.quantity = e.target.value
                break;
            }
        }
        setIngredientRows([...newIngredientRows])
    }

    function updateTags(e, i) {
        //    console.log("update tag id:", e.target.value, tagRows)
        let newTagRows = [...tagRows]


        for (var item of newTagRows) {
            console.log("found specific tag", item, i)
            if (item.index == i) {
                item.tag_id = e.target.value
                break;
            }
        }

        setTagRows([...newTagRows])
    }

    let submitBtns =
        clickedRecipe == null ?
            <>
                <button type="submit" className="btn btn-secondary ">Submit</button>
            </>
            :

            <button type="submit" className="btn btn-secondary ">Update</button>


    const renderIngredientRows = ingredientRows.map((item, i) => {
        //  console.log(item);
        let inputIngredient = "inputIngredient" + i;
        let inputQuantity = "inputQuantity" + i;
        return (
            <div className="form-group row">
                <label for={inputIngredient} className="col-sm-2 col-form-label">Ingredients</label>
                <div className="col-sm-6">
                    <select
                        onChange={(e) => updateIngredientName(e, i)}
                        type="dropdown" className="form-control" id={inputIngredient}
                        placeholder="Choose an ingredient"
                        defaultValue={item.id}>

                        {props.ingredientsList.map((ingred, index) => {

                            return (
                                <option key={index} value={ingred.id}
                                    selected={item.id === ingred.id}
                                >
                                    {ingred.ingredient}
                                </option>
                            )
                        }
                        )}
                    </select>
                </div>
                <label for={inputQuantity} className="col-sm-2 col-form-label">Quantity</label>
                <div className="col-sm-2">
                    <input onChange={(e) => updateIngredientQuantity(e, i)}
                        type="text" className="form-control" id={inputQuantity} placeholder="Quantity"
                        defaultValue={item.quantity}
                    >
                    </input>
                    <div onClick={(e) => deleteIngredient(e, item.index)} type="button" class="btn btn-secondary  my-1">Delete Ingredient</div>
                </div>
            </div>)
    })

    const renderTagRows = tagRows.map((item, i) => {
        // console.log(item);
        let inputTag = "inputTag" + i;
        return (
            <>
            <div className="form-group row">
                <label for={inputTag} className="col-sm-2 col-form-label">Tags</label>
                <div className="col-sm-6">
                    <select
                        onChange={(e) => updateTags(e, i)}
                        type="dropdown" className="form-control" id={inputTag}
                        placeholder="Tags">
                        {props.tagsList.map((tag, index) => {
                            return (
                                <option key={index} value={tag.id}
                                    selected={item.category === tag.category}
                                >
                                    {tag.category}
                                </option>

                            )
                        }
                        )}
                    </select>
                </div>
            </div>
 
 </>
        )
    })


    const createRecipe = (e) => {
        e.preventDefault();

        if (clickedRecipe) {
            const info = {
                title: title,
                ingredient: ingredientRows,
                direction: direction,
                servings: servings,
                cooking_time: cooking_time,
                image: image,
                tags: tagRows,
                user_id: userInfo.user.id,
                recipe_id: clickedRecipe ? clickedRecipe.id : null
            }
            console.log(info)
            axios.post("http://127.0.0.1:8000/api/updateform", info)
                // axios.post("https://recipe-final-project.uc.r.appspot.com/api/update", info)
                .then(response => {
                    console.log(response.data);
                    window.localStorage.setItem("recipes", JSON.stringify(response.data.data));
                    // console.log("update clicked, after api");
                    history.push('/view');
                })
                .catch(error => {
                    console.log(error)
                });
        } else {
            const info = {
                title: title,
                ingredient: ingredientRows,
                direction: direction,
                servings: servings,
                cooking_time: cooking_time,
                image: image,
                tags: tagRows,
                user_id: userInfo.user.id,

            }
            axios.post("http://127.0.0.1:8000/api/createform", info)
                // axios.post('https://recipe-final-project.uc.r.appspot.com/api/createform', info)
                .then(response => {
                    console.log(response.data);
                    console.log("create clicked");
                    window.localStorage.setItem("recipes", JSON.stringify(response.data.data));
                    history.push('/view');
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }
    const formTitle =
        (history.location.pathname == '/modify') ?
            <>
                <h4>Modify Your Recipe:</h4>
            </>
            :
            <h4>Create Your Own Recipe:</h4>

    return (
        <div className="container bg bg-light" id="createform">
            <div className="row text-center">
                <div className="col-10 offset-1">
                    <br></br>
                    {formTitle}
                    <br></br>
                    <form onSubmit={createRecipe}>
                        <div className="form-group row">
                            <label for="inputTitle" className="col-sm-2 col-form-label">Title</label>
                            <div className="col-sm-10">
                                <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="inputTitle" placeholder="Title"

                                    defaultValue={clickedRecipe ? clickedRecipe.title : null}></input>

                            </div>
                        </div>

                        {renderIngredientRows}

                        <div onClick={addUserIngredient} type="submit" class="btn btn-secondary my-1">Add Ingredient</div>
                       

                        <div className="form-group row">
                            <label for="inputDirections" className="col-sm-2 col-form-label">Directions</label>
                            <div className="col-sm-10">
                                <input onChange={(e) => setDirection(e.target.value)} defaultValue={clickedRecipe ? clickedRecipe.directions[0].direction : null} type="text" className="form-control" id="inputDirections" placeholder="Directions"></input>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputServings" className="col-sm-2 col-form-label">Servings</label>
                            <div className="col-sm-10">
                                <input onChange={(e) => setServings(e.target.value)} defaultValue={clickedRecipe ? clickedRecipe.servings : null} type="text" className="form-control" id="inputServings" placeholder="Servings"></input>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputCookingTime" className="col-sm-2 col-form-label">Cooking Time (min)</label>
                            <div className="col-sm-10">
                                <input onChange={(e) => setCooking_time(e.target.value)} defaultValue={clickedRecipe ? clickedRecipe.cooking_time : null} type="text" className="form-control" id="inputCookingTime" placeholder="Cooking Time"></input>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="image" className="col-sm-2 col-form-label">Image</label>
                            <div className="col-sm-10">
                                <input onChange={(e) => setImage(e.target.value)} defaultValue={clickedRecipe ? clickedRecipe.image : null} type="inputImage" className="form-control" id="inputImage" placeholder="Image"></input>
                            </div>
                        </div>

                        {renderTagRows}

                        <div onClick={addTag} type="submit" class="btn btn-secondary  my-1">Add a Tag</div><br></br>
                        <div onClick={deleteTag} type="submit" class="btn btn-secondary  my-1">Delete Tag</div>
                        <div></div>
                        <br></br>
                        {submitBtns}
                        {/*  conditionally render disabled */}
                    </form>
                </div>
            </div>
        </div>

    )
}
