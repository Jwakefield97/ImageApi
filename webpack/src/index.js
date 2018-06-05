import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';

class App extends React.Component {
    constructor(props){
        super(props); 
    }
    render(){
        return (
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root')); 
