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
                <FirstPartOfHome
                />
            </div>
        );
    }
}

export default Home;
