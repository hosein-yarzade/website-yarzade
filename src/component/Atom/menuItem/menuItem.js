import React, {Component} from 'react';
import './style.css';

class menuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="a__containerMenuItem" onClick={this.props.onclick}>
                <a className="a__innerContainerMenuItem" href={this.props.id}>
                    <p className="a__TextMenuItem">{this.props.textItemMenu}</p>
                </a>
                <div className ="a__borderBottom" />
                <div className ="a__divAnimateItem1"/>
                <div className ="a__divAnimateItem2"/>

            </div>
        );

    }
}

export default menuItem;
