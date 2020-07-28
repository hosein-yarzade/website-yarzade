import React, {Component} from 'react';
// import  bgg from './media/img/icons/github.svg'

import './linksIcon.css';

class LinksIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="view-link-icon" >
                {/*<img className={'links-icon'} src={this.props.linkIcon}/>*/}
                <span style={{
                    backgroundImage: `url(${this.props.linkIcon})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }} className={'links-icon'}></span>
            </div>
        );
    }
}

export default LinksIcon;
