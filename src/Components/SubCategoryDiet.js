import React from "react";
import Navbar from './Navbar';

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const storageId = window.localStorage.getStorageId(key);
            return storageId ? JSON.parse(storageId) : initialValue;
        }
        catch (error) {
            console.log(error)
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            const valueToStore = 
                value instanceof Function ? value(storedValue) : value;
                setStoredValue(valueToStore);

                window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}




export default function SubCategoryDiet() {

    return (
        <>
        <Navbar />
        <div className="row p-3" id="cardRow">
         <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/D99F0BD2-DC13-4FEB-BDD0-512EC7265DF0_1_105_c.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Gluten Free</h5>
                        <a href="/gf" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
       
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/eggs.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Keto</h5>
                        <a href="/keto" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/poptarts.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Dairy Free</h5>
                        <a href="/dairyfree" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/tompizza.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Vegetarian</h5>
                        <a href="/vegetarian" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            </div>
        </>
        )}

          {/* <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/ribeye.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Beef</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/rice.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Rice</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-12  offset 1">
                <div className="card" >
                    <img src="./Images/quiche.jpeg" className="card-img-top" id="categoryPic" alt="category picture" />
                    <div className="card-body">
                        <h5 className="card-title">Eggs</h5>
                        <a href="/recipeList" className="btn btn-secondary">See more</a>
                    </div>
                </div>
            </div>
            </div>