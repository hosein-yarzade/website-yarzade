import React, {Component} from 'react';

import './titleTextLeft.css';

class TitleTextLeft extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div style={{right:this.props.titleTextPlaceLeft }}  className={'a__titleTextLeftContainer'}>
            <text className={'a__titleTextLeft'}> {this.props.titleText}</text>
            </div>
        );
    }
}

export default TitleTextLeft;
