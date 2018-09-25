import React, { Component } from 'react';
import { AppBar, Button, Typography, Radio } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    state = {
        selectedValue: 'a',
        url: ""
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };


    render() {
    return (
        <div className="home-wrapper">
            <div className="app-header">
                <AppBar position="sticky">
                    <Typography variant="title" color="inherit">
                    <a href="/">VERA Data</a>
                    </Typography>
                </AppBar>
            </div>
            <div className="menu-wrap">
                <div className="home-menu">
                    <div className="rad-sel">
                    <Radio
                    checked={this.state.selectedValue === 'a'}
                    onChange={this.handleChange}
                    value="a"
                    name="radio-button-demo"
                    aria-label="A"
                    /> Search By TCN id ?</div> 
                    
                    <div className="rad-sel"><Radio
                    checked={this.state.selectedValue === 'b'}
                    onChange={this.handleChange}
                    value="b"
                    name="radio-button-demo"
                    aria-label="B"
                    /> Search By UPC id ?</div>
                    
                    <Link to={this.state.selectedValue === "a" ? "/form/TCN" : "/form/UCP"}><Button 
                    variant="outlined" 
                    color="primary"
                    >
                    OK
                    </Button></Link>
                </div>
            </div>
        </div>
    )
  }
}
