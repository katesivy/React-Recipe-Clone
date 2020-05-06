import React from "react";

function Footer() {
        return (

            <>
                <div className="row d-flex bg-light grey">
                    <div className=" col-lg-3 col-sm-12 text-center offset-1 offset-sm-0 m-3 p-3">
                        <h5 className="card-title" id="Location">Footer Info</h5>
                        <p className="card-text">
                            </p>
                        {/* <a href="#" className="btn btn-primary" >Map</a> */}
                   
                    </div>
                    <div className="col-lg-4 col-sm-12 offset-1 offset-sm-0 text-center m-3 p-3">
                        <h5 className="card-title" id="Hours">Footer Info</h5>
                        <p className="card-text">
                            </p>
                        <br></br>
                    </div>
                    <div className="col-lg-3 col-sm-12 offset-1 text-center m-3 p-3">
                        <h5 className="card-title" id="Contact">Footer Info</h5>
                        <p className="card-text">
                            </p>
                        <br></br>
                    </div>
                </div>

            </>

        );
}

export default Footer;