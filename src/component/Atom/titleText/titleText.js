import React, {Component} from 'react';

import './titleText.css';

class TitleText extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <text className={'a__titleText'}>{this.props.titleText}</text>
        );
    }
}

export default TitleText;
