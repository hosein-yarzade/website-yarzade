import React, {Component} from 'react';
import './style.css';

class menuItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="a__containerMenuItem">
                <a className="a__innerContainerMenuItem" href="#">
                    <p className="a__TextMenuItem">{this.props.textItemMenu}</p>
                </a>
                <div className ="a__borderBottom" />
                <div className ="a__divAnimateItem1"/>
                <div className ="a__divAnimateItem2"/>
                {/*<picture>*/}
                {/*<div className="a__innerContainerImageParts">*/}
                {/*<img src={this.props.imageParts} alt=""/>*/}
                {/*<svg width="102%" height="102%">*/}
                {/*<defs>*/}
                {/*<mask id="mask">*/}
                {/*<rect width="100%" height="100%" fill="#fff"/>*/}
                {/*<rect width="22%" height="50%" fill="#000" className="divMusk1"/>*/}
                {/*<rect width="27%" height="75%" fill="#000" className="divMusk2"/>*/}
                {/*</mask>*/}
                {/*</defs>*/}
                {/*<rect width="100%" height="100%" mask="url(#mask)" fill="#082f35"/>*/}
                {/*</svg>*/}
                {/*</div>*/}
                {/*</picture>*/}


            </div>
        );

    }

}

export default menuItem;