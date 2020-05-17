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
<div className="o__sideThird" id="item4">
    <div className={'titleTextContainerFourth'}>
        <div style={{left:this.props.titleTextPlacePart4 }}  className={'o__titleTextContainerPart2'}>
            <TitleTextSmaller
                titleText={'My skills'}
                titleTextPlace={this.props.titleTextPlace}
            />
        </div>
    </div>
    <div className={"o__containerFourthPart-circle"}>
        <Circle_dashed_typeTwo/>
    </div>
    <div className={"o__containerFourthPart-circle2"}>
        <Circle_dashed_typeTwo/>
    </div>
    {this.props.showSkills ?
       <div className={'o__sideThird'}>
            <div className={'o__CircleTextContainer o__CircleTextContainer1'} >
                <CircleText textSkill={"adobe XD"}
                style={{fontsize:4}}
                />
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer2'}>
                <CircleText  textSkill={"PS"}
                    fontSize={20}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer3'} >
                <CircleText  textSkill={"HTML"}
                    fontSize={20}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer4'} >
                <CircleText  textSkill={"CSS"}
                    fontSize={22}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer5'} >
                <CircleText  textSkill={"react.js"}
                    fontSize={20}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer6'} >
                <CircleText  textSkill={"react native"}
                    fontSize={17}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer7'} >
                <CircleText  textSkill={"JS"}
                    fontSize={22}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer8'} >
                <CircleText  textSkill={"C++"}
                    fontSize={22}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer9'} >
                <CircleText  textSkill={"LESS"}
                    fontSize={22}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer10'} >
                <CircleText  textSkill={"SASS"}
                    fontSize={22}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer11'} >
                <CircleText  textSkill={"jquery"}
                    fontSize={20}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer12'} >
                <CircleText  textSkill={"APIs"}
                    fontSize={20}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer13'} >
                <CircleText  textSkill={"mongoDB"}
                    fontSize={15}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer14'} >
                <CircleText  textSkill={"Git"}
                    fontSize={20}/>
           </div>
           <div className={'o__CircleTextContainer o__CircleTextContainer15'} >
                <CircleText  textSkill={"team work"}
                    fontSize={19}/>
           </div>
       </div>
       : null
    }
</div>
        );
    }
}

export default FourthOfHome;
