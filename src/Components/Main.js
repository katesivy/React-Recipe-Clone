// import React, { useState, useEffect, Fragment } from 'react';
// import Recipe from './Recipe';
// import SubCategoryType from './SubCategoryType';
// import axios from 'axios';

// // { recipes: [] }
// function Main() {
//     const [recipes, setRecipes] = useState( [] );
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect( () => {
        
//         const fetchData = async () => {
//             const result = await axios.get('http://127.0.0.1:8000/api/recipes');
//             setRecipes(result.data.data);
//             console.log(result.data.data);
//             setIsLoading(false);
//         }
        
//         fetchData();
//     }, []);

//     console.log(recipes);

//         return (
            
//             <Fragment>

//             {isLoading ? (
//                     <div>Loading ...</div>
//                 ) : (
//                     recipes.map((recipe, index) => (
//                             <div className="row"
//                                      key={index}>
//                                 <Recipe
                                   
//                                     title={recipe.title}
//                                     image={recipe.image}
//                                     servings={recipe.servings}
//                                     cooking_time={recipe.cooking_time}
//                                     id ={recipe.id}
//                                     directions={recipe.directions}
//                                     tags={recipe.tags}
//                                     ingredients={recipe.ingredients}
//                                     user={recipe.user}        
//                                 />
//                             </div>
//                             )
//                         )
                    
//                 )
//             }
//             </Fragment>
//         );
// }

// export default Main;


    // } else (props.url.includes('/', '/')) 
    //     console.log(props);
    //     const recipeTypes = props.options.find(item => item.url == props.url).subtypes;
    //     console.log(recipeTypes);
    //     let recipesArray = [];
    //     // recipe.tags[index].category
    //     const filteredRecipes =
    //         props.recipes.filter((recipe, index) => {
    //             recipe.tags.map((tag) => {
    //                 recipeTypes.map((item) => {
    //                     if (tag.category == item) {
    //                         recipesArray.push(recipe);
    //                         console.log(tag.category, item);
    //                         return (

    //                             recipe
    //                         )
    //                     }
    //                 }
    //                 )
    //             })
    //         })
    //     console.log(recipesArray);
    //     const mappedRecipes = recipesArray.map((item, index) => {
    //         return (
    //             <h1>{item.title}</h1>
    //         )
    //     });
    //     return (
    //         mappedRecipes
    //     )
    // // };


       // protected function generateAccessToken($user)
    // {
    //     $token = $user->createToken($user->email.'-'.now());

    //     return $token->accessToken;
    // }
    // public function register(Request $request)
    // {
    //     $name = $request->input(‘name’);
    //     $this->validate(request(), [
    //         ‘name’ => ‘required’,
    //         ‘email’ => ‘required|email’,
    //         ‘password’ => ‘required’
    //     ]);
    //     $user = User::create([
    //         ‘name’ => $request[‘name’],
    //         ‘email’ => $request[‘email’],
    //         ‘password’ => Hash::make($request[‘password’]),
    //     ]);
    //     $token = $user->createToken(‘Laravel Password Grant Client’)->accessToken;
    //     $user->profile = $createprofile;
    //     $user->role = $request->role;
    //     $response = [
    //         ‘token’ => $token,
    //         ‘user’ => $user,
    //     ];
    //     return response($response, 200);
    // }




// public function register(Request $request)
    // {
    //     $request->validate([
    //         'name' => 'required', 
    //         'email' => 'required|email', 
    //         'password' => 'required|min:6'
    //     ]);


    //     $user = User::create([
    //         'name' => $request->name, 
    //         'email' => $request->email, 
    //         'password' => bcrypt($request->password)
    //     ]);

    //     return response()->json($user);
    // }

    // public function login(Request $request)
    // {
    //     $user = User::where('email', $request->email)->first();
    //     if ($user) {
    //         if (Hash::check($request->password, $user->password) {
    //             $token = $user->createToken('Laravel Password Grant Client')->accessToken;

    //                 'token' => $token,
    //                 'user' => $user
    //             ];
    //             return response($response, 200);
    //         } else {
    //             $response = 'Password mismatch';
    //             return response($response, 422);
    //         } else {
    //             $response = 'User doesn\t exist';
    //             return response ($response, 422);
    //         }
    //     }
    //     if( Auth::attempt(['email'=>$request->email, 'password'=>$request->password]) ) {
    //     $user = Auth::user();

    //     $token = $user->createToken($user->email.'-'.now());

    //     return response()->json([
    //         'token' => $token->accessToken
    //          ]);
    //     }
    // }
