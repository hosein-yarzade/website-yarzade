import React, {Component} from 'react';

import './secondPartOfHome.css';
import TitleText from "../../Atom/titleText/titleText";
import Circle from "../../Atom/circle/circle";
import Circle_dashed_typeTwo from "../../Atom/circle-storke-typeTwo/Circle-dashed-typeTwo";
import TextPart from "../../Atom/textPart/textPart";

class SecondPartOfHome extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
<div className="o__sideTwo" id="item2">
    <div className={'titleTextContainer'}>
        <div style={{left:this.props.titleTextPlacePart2 }}  className={'o__titleTextContainerPart2'}>
            <TitleText
                titleText={'about me'}
                titleTextPlace={this.props.titleTextPlace}
            />
        </div>
    </div>
    <img src="./media/personal/hosein-2.png" alt={'hosein'} className={"personal-image-second"} />

    <div className={"o__container-circle-one-partTwo"}>
        <Circle/>
    </div>
    <div className={"o__container-textPart-part2"} style={{left:this.props.textPlacePart2}}>
        <TextPart
            textPart={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus fugiat impedit inventore velit. Dolores laudantium sit unde. Adipisci, delectus.</p>}
        />
    </div>
    <div className={"o__container-circleDashPart2"}>
        <Circle_dashed_typeTwo/>
    </div>
</div>
        );
    }
}

export default SecondPartOfHome;
