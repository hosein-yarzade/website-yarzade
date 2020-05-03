import React, {Component} from 'react';
import FirstPartOfHome from "./../../component/Organism/firstPartOfHome/firstPartOfHome";
import SecondPartOfHome from "./../../component/Organism/secoundPartOfHome/secondPartOfHome";
import './App.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleTextPlace : '100%',
            titleTextPlaceLeft : '100%',

        };
    }

    componentDidMount() {
        setTimeout(()=>{
            let clientWidth = document.documentElement.clientWidth;
            if (clientWidth<500){
                this.setState({titleTextPlace:'5%',titleTextPlaceLeft:'1%'})
            }
            else{
                this.setState({titleTextPlace:'25%',titleTextPlaceLeft:'15%'})
            }
          }, 100);

    }


    render() {
        return (
            <div className="app" >

                {/*<MenuContainer/>*/}
                <FirstPartOfHome
                    titleTextPlace={this.state.titleTextPlace}
                    titleTextPlaceLeft={this.state.titleTextPlaceLeft}
                />
                <SecondPartOfHome
                />
            </div>
        );
    }
}

export default Home;
