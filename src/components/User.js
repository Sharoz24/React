import { useState } from "react";

const User=(props)=>{
    const [count]= useState(0);
    const [count2]= useState(2);

    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lggit">
            <h1>Count: {count}</h1>
            <h1>Count2:{count2}</h1>
            <h2>Name: {props.name}</h2>
            <h2>Location: Dehradun</h2>
            <h2>Contact: @khan_sharoz21_</h2>
        </div>
    );
}; 

export default User;


//here we just destructor prop name
// const User=({name})=>{
//     return (
//         <div className="user-card">
//             <h2>Name: {name}</h2>
//             <h2>Location: Dehradun</h2>
//             <h2>Contact: @khan_sharoz21_</h2>

//         </div>
//     );
// }; 

// export default User;
