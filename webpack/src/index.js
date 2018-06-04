import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


class App extends React.Component {
    constructor(props){
        super(props); 
    }
    render(){
        return (
            <div> 
                test page
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root')); 
