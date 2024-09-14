import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = ()=>{
    // Local State Variable
    const [ListOfRestaurants, setListOfRestaurants]= useState(resList);

    useEffect(()=>{
        fetchData()
    }, []);

    const fetchData = async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();

        console.log(json);
        setListOfRestaurants(json.data.cards)
    };



    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
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

              {ListOfRestaurants.map((restaurant) => (
                <RestaurantCard  key={restaurant.info.id} resData={restaurant}/>
                ))}
        
            </div>
        </div>
    
    );
};

export default Body;

// till yet ok afetr swiggy api fat gyi