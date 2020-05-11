import React, {Component} from 'react';
import LogoWithText from "../../Molecules/logoWithText/logoWithText";

import './firstPartOfHome.css';
import Circle_dashed from "../../Atom/circle_storke/Circle_dashed";
import Circle from "../../Atom/circle/circle";
import Circle_dashed_typeTwo from "../../Atom/circle-storke-typeTwo/Circle-dashed-typeTwo";
import TitleText from "../../Atom/titleText/titleText";
import TitleTextLeft from "../../Atom/titleTextLeft/titleTextLeft";
import TextPart from "../../Atom/textPart/textPart";

class FirstPartOfHome extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="side_one">

                 <div style={{left:this.props.titleTextPlace }}  className={'a__titleTextContainer'}>
                    <TitleText
                    titleText={'Hosein'}
                    titleTextPlace={this.props.titleTextPlace}
                />
                 </div>
                <img src="./media/personal/hosein-1.png" alt={'hosein'} className={"personal-image-one"} />
                <div style={{right:this.props.titleTextPlaceLeft }}  className={'a__titleTextLeftContainer'}>
                    <TitleTextLeft
                        titleText={'Yarzade'}
                        titleTextPlaceLeft={this.props.titleTextPlaceLeft}
                    />
                </div>
                <div className={"o__container-textPart-one"}>
                    <TextPart
                               textPart={'front-end developer'}
                    />
                </div>
                <div className={"o__container-textPart-two"}>
                    <TextPart
                               textPart={'react native developer'}
                    />
                </div>


                <div className={"o__container-circle-one"}>
                    <Circle/>
                </div>
                <div className={"o__container-circle-two"}>
                    <Circle/>
                </div>
                <div className={"o__container-circle-third"}>
                    <Circle/>
                </div>
                <div className={"o__container-circle-fourth"}>
                    <Circle_dashed_typeTwo/>
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
