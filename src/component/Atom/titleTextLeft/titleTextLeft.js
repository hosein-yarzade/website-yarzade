import React, {Component} from 'react';

import './titleTextLeft.css';

class TitleTextLeft extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <text className={'a__titleTextLeft'}> {this.props.titleText}</text>
        );
    }
}

export default TitleTextLeft;
