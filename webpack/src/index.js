import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import TopAppBar from './appBar.js';

class App extends React.Component {
    constructor(props){
        super(props); 
    }
    render(){
        return (
            <TopAppBar>
            </TopAppBar>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root')); 
