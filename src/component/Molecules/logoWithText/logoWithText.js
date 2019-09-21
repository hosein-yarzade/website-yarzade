import React, {Component} from 'react';
import Logo from "./../../Atom/logo/logo";
import TextDescribeLogo from "./../../Atom/textDescribeLogo/textDescribeLogo"
import './style.css';

class LogoWithText extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
        <div className="m__containerLogoWidthText">
            <Logo/>
            <TextDescribeLogo/>
        </div>
        );
    }
}

export default LogoWithText;