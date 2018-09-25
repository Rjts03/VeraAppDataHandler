import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, AppBar, Button, Typography } from '@material-ui/core';

export default class FormId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            isAble: true,
        }
    }
    

    render() {
    return (
      <div className="form-wrapper">
        <div className="app-header">
            <AppBar position="sticky">
                <Typography variant="title" color="inherit">
                <a href="/">VERA Data</a>
                </Typography>
            </AppBar>
        </div>

        <div className="app-form">
            <Input
            placeholder={"Enter "+this.props.match.params.type+" Id*"}
            inputProps={{
            'aria-label': 'Description',
            }}
            className="form-srch" 
            value={this.state.inputText}
            onChange={(e) => this.setState({ inputText: e.target.value, isAble: false })}
            />
            
            <Link to={ "/recommended-posts/"+this.state.inputText }>
            <Button variant="contained" 
            color="primary" 
            disabled = {this.state.isAble} 
            className="form-btn"
            >
            Submit
            </Button>
            </Link> 
        </div>

      </div>
    )
  }
}
