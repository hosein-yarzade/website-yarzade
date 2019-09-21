import React, {Component} from 'react';

import './logo.css';

class Logo extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (

            <img src="./media/img/logo/logo.png" alt={'Logo'} className="a__logo"/>

        );
    }
}

export default Logo;