import React, {Component} from 'react';
import FirstPartOfHome from "./../../component/Organism/firstPartOfHome/firstPartOfHome";
import SecondPartOfHome from "./../../component/Organism/secoundPartOfHome/secondPartOfHome";
import ThirdPart from "./../../component/Organism/thirdPart/thirdPart";
import './App.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleTextPlace : '100%',
            titleTextPlaceLeft : '100%',
            titleTextPlacePart2: '100%',
            textPlacePart2: '-100%',
        };
    }

    componentDidMount() {
        let that = this;
        setTimeout(()=>{
            let clientWidth = document.documentElement.clientWidth;
            if (clientWidth<500){
                this.setState({titleTextPlace:'5%',titleTextPlaceLeft:'1%'})
            }
            else{
                this.setState({titleTextPlace:'25%',titleTextPlaceLeft:'15%'})
            }
          }, 1000);
        window.addEventListener("scroll", function () {
                    let clientWidth = document.documentElement.clientWidth;
                    if (clientWidth<500){
                        if (this.pageYOffset < 500) {
                            that.setState({titleTextPlace : '5%', titleTextPlaceLeft : '1%'});
                        }
                        if (this.pageYOffset > 500) {
                        that.setState({titleTextPlacePart2:'3%',textPlacePart2:'5%',  titleTextPlaceLeft : '100%'});
                        }
                        // if(this.pageYOffset > 1400 || this.pageYOffset < 500){
                        //     that.setState({titleTextPlacePart2:'3%',textPlacePart2:'5%'});
                        // }
                    }
                    else {
                    if (this.pageYOffset < 500) {
                        that.setState({ titleTextPlace : '25%', titleTextPlaceLeft : '15%'});
                    }
                    if (this.pageYOffset > 500) {
                                that.setState({titleTextPlacePart2:'3%',textPlacePart2:'5%',  titleTextPlaceLeft : '100%'});
                    }
                    // if(this.pageYOffset > 1400 || this.pageYOffset < 500){
                    //         that.setState({titleTextPlacePart2:'3%',textPlacePart2:'5%'});
                    // }

                }
            }
        );
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
                    titleTextPlacePart2={this.state.titleTextPlacePart2}
                    textPlacePart2={this.state.textPlacePart2}
                />
                <ThirdPart

                />
            </div>
        );
    }
}

export default Home;
