import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css';


export default class Posts extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            checked: false,
            totalselect: []
        }
        this.renderPosts=this.renderPosts.bind(this);
    }

    componentDidMount() {
        fetch('https://35.231.66.247/demo/api/rec/_'+this.props.requestId+'?device_id=dev-test-0&device_secret=m00nraft')
        .then( res => res.json() )
        .then( data => this.setState({ posts: data.recommendations }, () => console.log(this.state.posts.length)) ) 
        .catch( e => alert(e))
    }

    renderPins = () => {
        console.log('BGV');
        !function(a, b, c) {
                var d, e, f;
                d = "PIN_" + ~~((new Date).getTime() / 864e5),
                a[d] ? a[d] += 1 : (a[d] = 1,
                a.setTimeout(function() {
                    e = b.getElementsByTagName("SCRIPT")[0],
                    f = b.createElement("SCRIPT"),
                    f.type = "text/javascript",
                    f.async = !0,
                    f.src = c.mainUrl + "?" + Math.random(),
                    e.parentNode.insertBefore(f, e)
                }, 10)),
            e = b.getElementsByTagName("SCRIPT")[0],
                    f = b.createElement("SCRIPT"),
                    f.type = "text/javascript",
                    f.async = !0,
                    f.src = c.mainUrl + "?" + Math.random(),
                    e.parentNode.insertBefore(f, e)
            }(window, document, {
                mainUrl: "//assets.pinterest.com/js/pinit_main.js"
            });
    }
    
    handleSelect(params, event) {
        let temp = [...this.state.totalselect];

        if (event.target.checked === true) {
            temp.push(params);
            this.setState({ totalselect: temp });
            console.log(temp);
        } else if (event.target.checked === false) {
            const index = temp.indexOf(params);
            if (index !== -1) {
            temp.splice(index, 1);
            this.setState({ totalselect: temp });
            console.log(temp);
            }
        }

        return this.state.totalselect;
    }

    sendSelectedData = () => {
        const temp = [...this.state.totalselect];
        console.log('here=> ', temp)
        return temp;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.posts.length !== this.state.posts.length)
        {
            this.renderPins();
        }
    }
            
    renderPosts() {
        let temp = (<div className="app-post">
            {this.state.posts.map( (item, index) =>
            { 
            return (
                <div className="post">
                    <div className="checkbox" id={index}>
                        <input
                        type="Checkbox"
                        value="checked"
                        onChange={e => this.handleSelect(item.social.id, e)}
                        />
                    </div>
                    <a key={index} href={"https://in.pinterest.com/pin/"+item.social.id+"/"} data-pin-do="embedPin">
                    </a>
                    <div className="tag">
                    <p><label>id: </label>{item.social.id}</p>
                    <p><label>source: </label>{item.social.source}</p>
                    </div>
                    <div className="overlay-select"></div>
                </div>
            )})}
        </div>)
        return temp    
    }

    render() { 
        return (
        <div className="post-wrapper">
            {this.renderPosts()}               
        </div> 
        )
    }
}
