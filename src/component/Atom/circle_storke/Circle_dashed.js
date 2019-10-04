import React, {Component} from 'react';

import './Circle_dashed.css';

class Circle_dashed extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (

            <svg className="dashed-circle">
                <circle calassName="a_circleDashed"  stroke-width="1" stroke="#6e008f" stroke-dasharray="3,10"
                        fill="transparent" r="50%" cx={"50%"} cy="50%"></circle>
            </svg>

        );
    }
}

export default Circle_dashed;