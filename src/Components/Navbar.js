import React from "react";

function Navbar(props) {
    return (
        <>
               <div className="row justify-content-center text-center mx-auto">
               
                   {props.sections.map((item, index) =>
                  
                        <ul className="nav nav-tabs justify-content-center " id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active border border-dark " href={item.href} id="menu-section" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">
                                    <h4 className="mt-2" key={index}  >
                                        {item.name} </h4>
                                </a>
                            </li>
                        </ul>
                      
                    )}
             </div> 
        </>

    )
}
export default NavTabs;




