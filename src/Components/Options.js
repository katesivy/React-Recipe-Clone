import React from "react";
import { Link } from 'react-router-dom';


export default function Options(props) {
    const mappedOptions = props.options.map((item, index) => {
        return (
        
            <div className="col-lg-3 col-sm-12" key={index}>
                <Link onClick={() => props.goTo(item.url)} to={'/recipes' + item.url}>
                    <div className="card" id="optionCards">
                        <img src={`./Images/${item.image}`} className="card-img-top" id="optionPic" alt="category picture" />
                        <div className="card-body">
                            <h5 className="card-title">{item.type}</h5>
                        </div>
                    </div>
                </Link>
            </div>

        )
    })
    return (
        <div className="row p-3" id="cardRow" >

            {mappedOptions}

        </div>
    )
}
