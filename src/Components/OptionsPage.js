import React from "react";
import { Link } from 'react-router-dom';
import SubCategory from './SubCategory';

export default function OptionsPage(props) {
    const mappedOptions = props.options.map((item, index) => {

        return (
            // onhover mouse
            <>
                <h1>optionspage</h1>
                <div className="col-lg-3 col-sm-12  offset 1" key={index}>
                    <div className="card" >
                        <img src={item.image} className="card-img-top" id="categoryPic" alt="category picture" />
                        <div className="card-body">
                            <h5 className="card-title">{item.type}</h5>
                            <Link onClick={() => props.goTo(item.url)} to={'/recipes' + item.url}>
                                See More
                        </Link>
                        </div>
                    </div>
                </div>

            </>

        )
    })
    return (
        <div className="row p-3" id="cardRow" >

            {mappedOptions}
        </div>
    )
}
