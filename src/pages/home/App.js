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

                <MenuContainer/>
                <FirstPartOfHome
                />
            </div>
        );
    }
}

export default Home;
