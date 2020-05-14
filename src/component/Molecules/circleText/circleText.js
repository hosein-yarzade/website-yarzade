import React, {Component} from 'react';

import './circleText.css';
import Circle from "../../Atom/circle/circle";

class CircleText extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
<div className="m__circleTextContainer">
    <Circle/>
    <text className="m__circleText" style={{fontSize:this.props.fontSize}}>{this.props.textSkill}</text>
</div>
        );
    }
}

export default CircleText;
