import { render } from "react-dom";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";


//About class  component
class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("Parent Costructor")
    }

    componentDidMount(){
        //console.log("Parent component Did Mount")
    }

    render() {
        //console.log("Parent Render")
      return (
        <div>
          <h1>About class component</h1>
          <div>
            Logged In User
            <UserContext.Consumer>
              {({loggedInUser})=>
                <h1 className="text-xl font-bold">{loggedInUser}</h1>
                }
            </UserContext.Consumer>
          </div>
          <h2>This is the namaste react web series</h2>
          <UserClass name={'First '} location={'Dehradun (class)'}/>
        </div>
      )
    }
}







/*
- Parent Constructor 
- Parent render
    
<RENDER PHASE BATCHED>
    -First child Constructor
    -First child render
    -Second child Constructor
    -Second child render

<DOM UPDATED - IN SINGLE BATCH> <COMMIT PHASE BATCHED>
    -First child componentDidMount
    -Second child componentDidMount

- Parent componentDidMount
*/


//About functional component
// const About= ()=>{
//     return (
//         <div>
//             <h1>About functional component</h1>
//             <h2>This is the Namaste React Web Series</h2>
            
//             <UserClass name={'Akshay Saini (class)'} location={'Dehradun (class)'} contact={'@akshaysaini7'}/>
//         </div>
//     );
// };

export default About;