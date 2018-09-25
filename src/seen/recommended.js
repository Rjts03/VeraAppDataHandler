import React, { Component } from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import Posts from '../components/posts';
import Popup from '../components/Popup';

let targetDataArray = [];
export default class RecommendedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selData: [],
        };
        this.refPosts = React.createRef();
    }

    getSelectedData = () => {
        console.log('getting data...');
        const temp = this.refPosts.current.sendSelectedData();
        console.log('got => ',temp);
        targetDataArray = temp.map(item => {return item});
        console.log('selectedData => ', targetDataArray);
        return targetDataArray;
    }

    render() {
        return (
            <div>
                <div className="app-header">
                    <AppBar position="sticky">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                <a href="/">VERA Data</a>
                            </Typography>

                            <Popup selectFunc={this.getSelectedData}/>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="posts-wrapper">
                    <Posts ref={this.refPosts} requestId={this.props.match.params.id}/>
                </div>
            </div>
        )
    }
}
