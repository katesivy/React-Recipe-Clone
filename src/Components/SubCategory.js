import React from "react";
import { Link } from 'react-router-dom';

export default function SubCategory(props) {
    console.log(props.options);
    const option = props.options.find(item => item.url == props.url);
    const list = option.subtypes;
    // console.log(list);
    const subcategories = list.map((item, index) => {
        console.log(item);
            return (
            <>
             <div className="col-lg-3 col-sm-12  offset 1" >
                <div className="card"key={index} >
                    {/* <img src={item.image} className="card-img-top" id="categoryPic" alt="category picture" /> */}
                    <div className="card-body">
                        <h5 className="card-title">{item}</h5>
                        <Link onClick={() => props.goTo(item.url)} to={'/recipes' + option.url + '/' + item}>
                            See More
                        </Link>
                    </div>
                </div>
            </div> 
            </>
        )
        
    });
    return (
  subcategories
    )
    }

