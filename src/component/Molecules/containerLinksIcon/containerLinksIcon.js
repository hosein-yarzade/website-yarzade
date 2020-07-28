import React, {Component} from 'react';
import { ExternalLink } from 'react-external-link';
import './containerlinksIcon.css';
import Circle from "../../Atom/circle/circle";
import LinksIcon from "../../Atom/linksIcon/linksIcon";

class ContainerLinksIcon extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {addressLink ,linkIcon}= this.props;
        return (
            <div className="m__containerLinksIcon" >
                <a  href={addressLink} target="_blank">
                <LinksIcon linkIcon={linkIcon}/>
                </a>
            </div>
        );
    }
}

export default ContainerLinksIcon;
