import React, {Component} from 'react';

import './thirdPart.css';
import TitleTextSmaller from "../../Atom/titleTextSmaller/titleTextSmaller";
import Circle from "../../Atom/circle/circle";
import Circle_dashed_typeTwo from "../../Atom/circle-storke-typeTwo/Circle-dashed-typeTwo";
import TextPart from "../../Atom/textPart/textPart";

class ThirdPart extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
<div className="o__sideThird">
    <div className={'titleTextContainer'}>
        <div style={{left:this.props.titleTextPlacePart2 }}  className={'o__titleTextContainerPart2'}>
            <TitleTextSmaller
                titleText={'Experience'}
                titleTextPlace={this.props.titleTextPlace}
            />
        </div>
    </div>
    <img src="./media/personal/hosein-3.png" alt={'hosein'} className={"personal-image-one"} />
</div>
        );
    }
}

export default ThirdPart;
