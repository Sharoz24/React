import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = ()=>{
    // Local State Variable
    const [ListOfRestaurants, setListOfRestaurants]= useState(resList);

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