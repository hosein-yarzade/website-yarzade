import React, {Component} from 'react';

import './titleTextSmaller.css';

class TitleTextSmaller extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <text className={'a__titleTextLeftSmaller'}> {this.props.titleText}</text>
        );
    }
}

export default TitleTextSmaller;
