import React, {Component} from 'react';
import LogoWithText from "../../Molecules/logoWithText/logoWithText";

import './style.css';
import Circle_dashed from "../../Atom/circle_storke/Circle_dashed";

class FirstPartOfHome extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="side_one">
                {/*<LogoWithText/>*/}

                    <Circle_dashed/>

            </div>
        );
    }
}

export default FirstPartOfHome;