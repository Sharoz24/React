import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{
    // Local State Variable
    const [ListOfRestaurants, setListOfRestaurants]= useState([]);
    const [searchText, setsearchText]= useState("");
    const [filteredRestaurant, setfilteredRestaurant]= useState([]);

    // console.log("The whole body is rerendering ever you type c a f e,it will render 4 time")
    
    useEffect(()=>{
        fetchData()
    }, []);

    const fetchData = async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();

        console.log(json);
        //Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };  


    return ListOfRestaurants.length === 0 ? ( <Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value)
                    }} 
                    />
                    <button onClick={()=> {
                        //Filter the restaurant and update the UI
                        console.log(searchText);

                        const filteredRestaurant = ListOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setfilteredRestaurant(filteredRestaurant)

                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={()=> {
                    //Filter logic here
                    const FilteredList = ListOfRestaurants.filter(
                        (res) => res.info.avgRating >4
                    );
                    setListOfRestaurants(FilteredList);
                }}
                
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
              {filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}
                >
                    <RestaurantCard resData={restaurant}/>
                </Link>
                ))}
        
            </div>
        </div>
    
    );
};

export default Body;

// If you have a rendering based on a condition, it will known as Conditional Rendering.