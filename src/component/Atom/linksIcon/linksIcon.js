import React, {Component} from 'react';
// import  bgg from './media/img/icons/github.svg'

import './linksIcon.css';

class LinksIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="view-link-icon" href='www.google.com'>
                {/*<img className={'links-icon'} src={this.props.linkIcon}/>*/}
                <span style={{
                    backgroundImage: `url(${this.props.linkIcon})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }} className={'links-icon'}></span>
            </a>
        );
    }
}

export default LinksIcon;
