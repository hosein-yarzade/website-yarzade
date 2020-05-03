import React, {Component} from 'react';

import './titleText.css';

class TitleText extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div style={{left:this.props.titleTextPlace }}  className={'a__titleTextContainer'}>
            <text className={'a__titleText'}>{this.props.titleText}</text>
            </div>
        );
    }
}

export default TitleText;
