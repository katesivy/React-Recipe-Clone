import React from "react";
import Options from "./Options";

export default function Home(props) {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-5">~find a recipe or create your own~</h1>
                </div>
            </div>

            <div className="row p-3" id="cardRow">

                <Options options={props.optionsArray} goTo={props.setUrl} />
            </div>

        </>

    );

}