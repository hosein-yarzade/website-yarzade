import React, {Component} from 'react';
import FirstPartOfHome from "../../component/Organism/firstPartOfHome/firstPartOfHome";
import './App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }



    render() {
        return (
            <div className="app" >
                <img src="./media/img/backGround/waves.png" alt={'Logo'} className="imageBack"/>
                <FirstPartOfHome
                />

            </div>
        );
    }
}

export default Home;
