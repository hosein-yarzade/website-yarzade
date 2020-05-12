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
<div className="o__sideThird">
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
            textPart={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloribus fugiat impedit inventore velit. Dolores laudantium sit unde. Adipisci, delectus.</p>

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
