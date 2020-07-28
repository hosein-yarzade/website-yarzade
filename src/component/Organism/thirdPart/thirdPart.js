import React, {Component} from 'react';

import './thirdPart.css';
import TitleTextSmaller from "../../Atom/titleTextSmaller/titleTextSmaller";
import Circle from "../../Atom/circle/circle";
import Circle_dashed_typeTwo from "../../Atom/circle-storke-typeTwo/Circle-dashed-typeTwo";
import TextPart from "../../Atom/textPart/textPart";
import Circle_dashed from "../../Atom/circle_storke/Circle_dashed";

class ThirdPart extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
<div className="o__sideThird" id="item3">
    <div className={'titleTextContainer'}>
        <div style={{left:this.props.titleTextPlacePart3 }}  className={'o__titleTextContainerPart2'}>
            <TitleTextSmaller
                titleText={'Experience'}
                titleTextPlace={this.props.titleTextPlace}
            />
        </div>
    </div>
    <img src="./media/personal/hosein-3.png" alt={'hosein'} className={"personal-image-one"} />
    <div className={"o__container-circle-one"}>
        <Circle/>
    </div>
    <div className={"o__container-textPart-part3"} style={{right:this.props.textPlacePart3}}>
        <TextPart
            textPart={<p> ِِِDR.autol  . KIA  _ Jan 2018 - Mar 2019 <br/>Startup about car service that eventually failed <br/> React Native & Front-end developer _ scrum method<br/><br/>
            Helsa . Baman _ May 2019 - Oct 2019 <br/> Startup about online laundry on site <br/> React Native Developer <br/><br/>
            Karatech Group _ Feb 2020 – Present  <br/>Startup about smart home , We manage it with friends<br/> Full stack developer

            </p>

            }
        />
    </div>
    <div className={"o__container-circle-fourth"}>
        <Circle_dashed_typeTwo/>
    </div>
    <div className={"o__container-circle-dash-thirdPart"}>
        <Circle_dashed_typeTwo/>
    </div>
</div>
        );
    }
}

export default ThirdPart;
