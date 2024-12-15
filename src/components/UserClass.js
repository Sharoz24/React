import React from "react";

class UserClass extends React.Component{
    constructor (props){
        super(props)
        
        this.state={
            userInfo:{
                name: "Dummy",
                location: "Default",
                avatar_url: "https://avatar-dummy-url"
            }
        };
        console.log(this.props.name + "Child Costructor");
    }

    async componentDidMount(){
        console.log(this.props.name + "Child component Did Mount");
        // API call

        const data= await fetch("https://api.github.com/users/sharoz24")
        const json= await data.json();
   

        this.setState({
            userInfo: json,
        });

        console.log(json);
    } 

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Component Will UnMount")
    };

    render(){
        console.log(this.props.name + "Child render")  
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h2>Name: {name}</h2> */}
                <h2>Location: {location}</h2>                
                <img src={avatar_url}></img>
                <h2>Contact: @sharoz24</h2>
            </div>
        );
    };
};

export default UserClass;

/*
----MOUNTING----

Constructor (dummy)
Render (dummy)
       <HTML Dummy >
ComponentDidMount
       <API call>
       <this.setState> --> State Variable is updated

------UPDATE-----
        Render(API data)
        <html API data>
        <componentDidUpdate>

*/