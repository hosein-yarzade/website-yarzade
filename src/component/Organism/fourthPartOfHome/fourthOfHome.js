import React, {Component} from 'react';

import './fourthOfHome.css';
import TitleTextSmaller from "../../Atom/titleTextSmaller/titleTextSmaller";
import Circle from "../../Atom/circle/circle";
import Circle_dashed_typeTwo from "../../Atom/circle-storke-typeTwo/Circle-dashed-typeTwo";
import TextPart from "../../Atom/textPart/textPart";
import Circle_dashed from "../../Atom/circle_storke/Circle_dashed";
import CircleText from "../../Molecules/circleText/circleText";

class FourthOfHome extends Component {
    constructor(props){
        super(props);
    }


    render() {
        // let className = '';
        // if (this.props.showSkills) {
        //     className += 'o__CircleTextContainer';
        // }
        return (
<div className="o__sideThird">
    <div className={'titleTextContainer'}>
        <div style={{left:this.props.titleTextPlacePart4 }}  className={'o__titleTextContainerPart2'}>
            <TitleTextSmaller
                titleText={'My skills'}
                titleTextPlace={this.props.titleTextPlace}
            />
        </div>
    </div>
    {
   this.props.showSkills ?
    <div className={'o__CircleTextContainer o__CircleTextContainer1 '}>
        <CircleText/>
    </div>
       : null
    }
</div>
        );
    }
}

export default FourthOfHome;
