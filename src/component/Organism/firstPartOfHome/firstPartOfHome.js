import React, {Component} from 'react';
import LogoWithText from "../../Molecules/logoWithText/logoWithText";

import './style.css';

class FirstPartOfHome extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="side_one">
                <LogoWithText/>
            </div>
        );
    }
}

export default FirstPartOfHome;