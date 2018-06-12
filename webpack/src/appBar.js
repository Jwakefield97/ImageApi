import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

export default class TopAppBar extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" style={styles.flex}>
                        ImageApi
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}