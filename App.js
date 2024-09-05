import React from "react";
import ReactDOM from "react-dom/client";


const Title=()=>(
    <h1 className="head" tabIndex="5">
        React Element   
    </h1>
); 

const HeadingComponent= ()=>(
    <div id="container">
        <h1>Namaste React Functional Componentttt</h1>
        <Title/>
        <Title></Title>
        {Title()}
    </div>
);



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)
