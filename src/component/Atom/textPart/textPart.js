import React, {Component} from 'react';

import './textPart.css';

class TextPart extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <text className={'a__textPart'}>{this.props.textPart}</text>
        );
    }
}

export default TextPart;
