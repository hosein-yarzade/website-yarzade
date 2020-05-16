import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './cursor.css';
import CircleDashedTypeTwo from "../circle-storke-typeTwo/Circle-dashed-typeTwo";

class Cursor extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div  className={"a__containerCursor"}>
            <div style={{top:this.props.cursorTop , left:this.props.cursorLeft }} className={"cursor"}/>
            <div style={{top:this.props.cursorTop - 3 , left:this.props.cursorLeft -3}} className={"cursor2"}>
                <CircleDashedTypeTwo/>
            </div>
            </div>
        );
    }
}

export default Cursor;
