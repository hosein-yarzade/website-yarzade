import React, {Component} from 'react';
import LogoWithText from "../../Molecules/logoWithText/logoWithText";

import './style.css';
import Circle_dashed from "../../Atom/circle_storke/Circle_dashed";
import Circle from "../../Atom/circle/circle";

class FirstPartOfHome extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="side_one">
                {/*<LogoWithText/>*/}
                <img src="./media/personal/hosein 1.png" alt={'hosein'} className={"personal-image-one"} />
                <div className={"o__container-circle-one"}>
                    <Circle/>
                </div>
                <div className="circle-dashed-top-left">
                    <Circle_dashed/>
                </div>
                <div className="circle-dashed-center">
                    <Circle_dashed/>
                </div>

            </div>
        );
    }
}

export default FirstPartOfHome;
