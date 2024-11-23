// Displaying the Data

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();

    //we just built dummy to show the prop  drilling concept and it has no use other than it
    const dummy = "Dummy data"

    const resInfo= useRestaurantMenu(resId);

    const [showIndex, setShowIndex]= useState(null);
   
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    // Extract itemCards for both restaurant structures
    const itemCards =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards || 
        [];

    const categories= 
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
            c.card?.["card"]?.["@type"] === 
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            
    );
   

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-xl">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/*categories accordio*/}
            {categories.map((category, index) => (
                //controlled component
                <RestaurantCategory
                key={category?.card?.card.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true:false}
                setShowIndex={()=> setShowIndex(index)}
                dummy={dummy}
                /> 

            ))}
            
            
        </div>
    );
};

export default RestaurantMenu;
