import React, {Component} from 'react';

import './loaderPage.css';

class loaderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidUpdate() {
        if (this.props.loader) {
            console.log(this.props.loader);
            document.getElementById("containerLoader").style.cssText = " display:flex ";
        }
        else {
            document.getElementById("containerLoader").style.cssText = " transform:translateY(-100%)";
        }
    }

    render() {
        return (
            <div className="a__containerLoaderPage" id="containerLoader">
                <div className="a__containerImagesLoader">
                    <img className="a__loaderLogo " src="./media/personal/hosein-2.png" alt=""/>
                    <text className="a__textLoader "  > welcome to my page </text>
                    <text className="a__textLoader ImagesLoader1"  > please waite . . .</text>
                </div>
            </div>
        );
    }
}

export default loaderPage;
