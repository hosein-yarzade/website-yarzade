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
                <ExternalLink  target="_blank" href={addressLink} >
                <LinksIcon linkIcon={linkIcon}/>
                </ExternalLink>
            </div>
        );
    }
}

export default ContainerLinksIcon;
