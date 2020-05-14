import React, { useState } from "react";
import RecipeList from './RecipeList';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


export default function SubCategory(props) {
    // console.log(props.options);
    // const lowerprops = props.subtype.toLowerCase();
    console.log(props);
    const [subtype, setSubtype] = useState('');

    // console.log(props.url);
    const splitUrl = '/' + props.url.split('/')[1];
    // console.log(splitUrl, props);
    const option = props.options.find(item => item.url == splitUrl);
    //  console.log(option);
    let { path, url } = useRouteMatch();
    // console.log({ path });
     console.log(option.subtypeImage);
    const pic= option.subtypeImage.map((image, key)=>  { 
        return (
            image 
        ) 
    }); 
    console.log(pic[0]);
    const subcategories = props.options ? option.subtypes.map((item, index) => {
        // console.log(option.subtypeImage);
         
        return (
            <div className="col-lg-3 col-sm-12  offset 1" >
                <Link onClick={() => setSubtype(item)} to={url + '/' + item}>
                    <div className="card bg bg-secondary text-light" key={index} >
                        {/* <img src={pic}       
                        className="card-img-top" id="categoryPic" alt="category picture" /> */}
                        <div className="card-body">
                            <h5 className="card-title">{item}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        )
       
    }) : <h2>no recipes found</h2>;

    return (
        <>
            <div className="row">
                {subcategories}

            </div>

            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/:subtype`}>
                    <RecipeList recipes={props.recipes} subtype={subtype} />
                </Route>
            </Switch>

        </>
    );
}