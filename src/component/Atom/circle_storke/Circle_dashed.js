import React, {Component} from 'react';

import './Circle_dashed.css';

class Circle_dashed extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
<div className="view-dashed-circle">
            <svg className="dashed-circle">
                <circle calassName="a_circleDashed"  stroke-width="2" stroke="#C29E3D" stroke-dasharray="4,6"
                        fill="transparent" r="50%" cx={"50%"} cy="50%"></circle>
            </svg>
</div>
        );
    }
}

export default Circle_dashed;
