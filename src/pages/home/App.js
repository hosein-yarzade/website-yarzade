import React, {Component} from 'react';
import FirstPartOfHome from "./../../component/Organism/firstPartOfHome/firstPartOfHome";
import SecondPartOfHome from "./../../component/Organism/secoundPartOfHome/secondPartOfHome";
import ThirdPart from "./../../component/Organism/thirdPart/thirdPart";
import FourthOfHome from "./../../component/Organism/fourthPartOfHome/fourthOfHome";
import './App.css';
import Cursor from "../../component/Atom/cursor/cursor";
import MenuContainer from "../../component/Molecules/menuContainer/menuContainer";
import LastPart from "../../component/Organism/lastPart/lastPart";
import LoaderPage from "../../component/Atom/loaderPage/loaderPage.js";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loader: true,
            cursorTop: 150,
            cursorLeft: 100,
            titleTextPlace: '100%',
            titleTextPlaceLeft: '100%',
            titleTextPlacePart2: '100%',
            textPlacePart2: '-100%',
            titleTextPlacePart3: '-100%',
            textPlacePart3: '-100%',
            titleTextPlacePart4: '-100%',
            showSkills: false,
        };
    }

    componentDidMount() {
        let that = this;
        this.cursorMouse()
        setTimeout(() => {
            let clientWidth = document.documentElement.clientWidth;
            if (clientWidth < 500) {
                this.setState({titleTextPlace: '5%', titleTextPlaceLeft: '1%'})
            } else {
                this.setState({titleTextPlace: '25%', titleTextPlaceLeft: '15%'})
            }
        }, 1000);
        window.addEventListener("scroll", function () {
                let clientWidth = document.documentElement.clientWidth;
                if (clientWidth < 500) {
                    if (this.pageYOffset > 0) {
                        that.setState({titleTextPlace: '5%', titleTextPlaceLeft: '1%'});
                    }
                    if (this.pageYOffset > 500) {
                        that.setState({titleTextPlaceLeft: '100%'});
                    }
                    if (this.pageYOffset > 500) {
                        that.setState({titleTextPlacePart2: '3%', textPlacePart2: '5%'});
                    }
                    if (this.pageYOffset > 1200 || this.pageYOffset < 500) {
                        that.setState({titleTextPlacePart2: '100%', textPlacePart2: '-100%'});
                    }
                    if (this.pageYOffset > 1050) {
                        that.setState({titleTextPlacePart3: '3%', textPlacePart3: '7%'});
                    }
                    if (this.pageYOffset > 1750 || this.pageYOffset < 1050) {
                        that.setState({titleTextPlacePart3: '-100%', textPlacePart3: '-100%'});
                    }
                    if (this.pageYOffset > 1800) {
                        that.setState({showSkills: true, titleTextPlacePart4: '7%'});
                    }
                    if (this.pageYOffset > 2900 || this.pageYOffset < 1800) {
                        that.setState({showSkills: false, titleTextPlacePart4: '-100%'});
                    }
                } else {

                    if (this.pageYOffset > 0) {
                        that.setState({titleTextPlace: '25%', titleTextPlaceLeft: '15%'});
                    }
                    if (this.pageYOffset > 500) {
                        that.setState({titleTextPlaceLeft: '100%'});
                    }
                    if (this.pageYOffset > 500) {
                        that.setState({titleTextPlacePart2: '3%', textPlacePart2: '5%'});
                    }
                    if (this.pageYOffset > 1200 || this.pageYOffset < 500) {
                        that.setState({titleTextPlacePart2: '100%', textPlacePart2: '-100%'});
                    }
                    if (this.pageYOffset > 1150) {
                        that.setState({titleTextPlacePart3: '3%', textPlacePart3: '8%'});
                    }
                    if (this.pageYOffset > 2100 || this.pageYOffset < 1150) {
                        that.setState({titleTextPlacePart3: '-100%', textPlacePart3: '-100%'});
                    }
                    if (this.pageYOffset > 2300) {
                        that.setState({showSkills: true, titleTextPlacePart4: '8%'});
                    }
                    if (this.pageYOffset < 2300) {
                        that.setState({showSkills: false, titleTextPlacePart4: '-100%'});
                    }

                }
            }
        );
    }

    cursorMouse = () => {
        const that = this;
        document.addEventListener('mousemove', function (e) {
            that.setState({cursorTop: (e.pageY - 10), cursorLeft: (e.pageX - 10)})
        })
    };
    endLoad = () => {
        setTimeout(() => {
            this.setState({loader: false})
        }, 3000);
    };

    render() {
        return (
            <div className="app" onLoad={this.endLoad}>
                <LoaderPage
                    loader={this.state.loader}
                />
                {/*<Cursor cursorTop={this.state.cursorTop} cursorLeft ={this.state.cursorLeft } />*/}
                <MenuContainer/>
                <FirstPartOfHome
                    titleTextPlace={this.state.titleTextPlace}
                    titleTextPlaceLeft={this.state.titleTextPlaceLeft}
                />
                <SecondPartOfHome
                    titleTextPlacePart2={this.state.titleTextPlacePart2}
                    textPlacePart2={this.state.textPlacePart2}
                />
                <ThirdPart
                    titleTextPlacePart3={this.state.titleTextPlacePart3}
                    textPlacePart3={this.state.textPlacePart3}
                />
                <FourthOfHome
                    titleTextPlacePart4={this.state.titleTextPlacePart4}
                    showSkills={this.state.showSkills}
                />
                <LastPart onLoad={this.endLoad}

                />
            </div>
        );
    }
}

export default Home;
