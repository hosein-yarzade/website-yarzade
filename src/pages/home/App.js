import React, {Component} from 'react';
import FirstPartOfHome from "./../../component/Organism/firstPartOfHome/firstPartOfHome";
import MenuContainer from "./../../component/Molecules/menuContainer/menuContainer";
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
                <img src="./media/img/backGround/waves.png" alt={'Circle_storke'} className="imageBack"/>
                <MenuContainer/>
                <FirstPartOfHome
                />
            </div>
        );
    }
}

export default Home;
