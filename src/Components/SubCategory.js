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
    console.log(props);
    const [subtype, setSubtype] = useState('');
    console.log(props.url);
    const splitUrl = '/' + props.url.split('/')[1];
    console.log(splitUrl, props);
    // console.log(subtype);
    const option = props.options.find(item => item.url == splitUrl);
    // console.log(option);
    let { path, url } = useRouteMatch();
    // console.log({ path });
    const history = useHistory();

    const subcategories = props.options ? option.subtypes.map((item, index) => {

        return (
            <div className="col-lg-3 col-sm-12 p-2 " >
                <Link onClick={() => setSubtype(item)} to={url + '/' + item}>
                    <div className="card bg bg-secondary text-light" key={index} >
                        <div className="card-body" id="subCatCards">
                            <h2 className="card-title text-center m-2 text-wrap">{item}</h2>
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
                    <RecipeList recipes={props.recipes} subtype={subtype} options={props.optionsArray} storeId={props.storeId}/>
                </Route>
            </Switch>

        </>
    );
}