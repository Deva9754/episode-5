import RestaurentCard from "./RestaurentCard";
import resList from "../Utils/mockData";
import { useState } from "react";


const Body = () => {
  const[ListOfRestaurants , setListOfRestaurants] = useState(resList);


  

    return (
      <div className="body">
        <div className="search">
           <input
            type="search"
            className="input"
            placeholder="search restaurents here..."
          /> 
          <button className="search-btn" >Search</button>
          </div>

          <div className= "filter">

          <button  className="filter-btn" onClick={()=>{

            const filteredList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4
              );
              setListOfRestaurants(filteredList);
            
            
          }}
          >
            Top Rated Restaurent</button>

        </div>
        <div className="res-card">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurentCard rescard={restaurant} key={restaurant.data.id} />
        ))}
      </div>
     
      </div>
    );
  };
  export default Body;