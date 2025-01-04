import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = ()=>{
    // Local State Variable- Super powerful variable
    const [listOfRestaurants, setListOfRestaurants]= useState([]);
    const [filteredRestaurant, setFilteredRestaurant]= useState([]);
    const [searchText, setsearchText]= useState("");

    {/*as swiggy removed the promoted label tag
        const RestaurantCardPromoted= withPromotedLabel(RestaurantCard);
        console.log("Body", listOfRestaurants)
    */}

   
    // console.log("The whole body is rerendering ever you type c a f e,it will render 4 time")
    
    useEffect(()=>{
        fetchData()
    }, []);

    const fetchData = async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();

        //console.log(json);
        //Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };  

    //useOnlinestatus hook 
    const onlineStatus = useOnlinestatus();

    if(onlineStatus === false)
    return(
        <h1>
            Looks like you are offline!! Please check your internet connection
        </h1>
    );

    const {loggedInUser, setUserName} = useContext(UserContext);


    //Shimmer UI
    if (listOfRestaurants.length ===0){

        return (
            <div className="flex flex-wrap">
                {Array.from({length:10}).map((val, i)=>(
                <Shimmer key={i}/>
            ))}
            </div>
        );
    };

    
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value)
                    }} 
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=> {
                        //Filter the restaurant and update the UI
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant)

                    }}>Search</button>
                </div>
                
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=> {
                        //Filter logic here
                        const filteredList = listOfRestaurants.filter(
                            (res) => res?.info?.avgRating >4.5
                        );
                        console.log(listOfRestaurants); // Check if this logs the correct restaurant data

                        setFilteredRestaurant(filteredList);
                    }}
                    
                    >
                        Top Rated Restaurant
                    </button>
                </div>

                <div className="search m-4 p-4 flex items-center">
                    <label>UserName:</label>
                    <input className="border border-black p-2"
                    value={loggedInUser}
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
               
            </div>
            <div className="flex flex-wrap">
              {filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}
                >
                    <RestaurantCard resData={restaurant}/> 

                    {/* as swiggy removed the promoted label tag so we cant do this
                    {restaurant.data.promoted ? (<RestaurantCardPromoted resData={restaurant}/>)
                    : (
                    <RestaurantCard resData={restaurant}/> 
                    )}

                    */}

                    
                </Link>
                ))}
        
            </div>
        </div>
    
    );
};

export default Body;

// If you have a rendering based on a condition, it will known as Conditional Rendering.