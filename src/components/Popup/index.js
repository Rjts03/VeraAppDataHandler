import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';
import './index.css';

let targetData = [];
export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
        }
    }

    handleYes = () => {
        this.setState({status: false});
        targetData = this.props.selectFunc();
        console.log('data => ',targetData)
        axios.post('https://jsonplaceholder.typicode.com/users', targetData )
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        console.log('sent');
    }

    handleNo = () => {
        this.setState({
            status: false
        });
    }

    handleClick = () => {
        this.setState({
            status: true
        });
    }

    render() {
        return (
            <div className="app-popup">
                <Button variant="outlined" color="default" onClick={this.handleClick}
                ><div className="tag-btn">DELETE</div></Button>
                <Dialog
                open={this.state.status}
                onClose={this.handleNo}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Warning !</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Do you really want to <b>delete</b> {}? 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleYes} color="primary">
                    Yes
                    </Button>
                    <Button onClick={this.handleNo} color="primary">
                    No
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
} 