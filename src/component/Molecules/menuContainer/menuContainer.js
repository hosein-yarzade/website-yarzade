import React, {Component} from 'react';
import MenuItem from "./../../Atom/menuItem/menuItem"
import './menuContainer.css';

class menuContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuState: false,
        };
    }

    menu = () => {
        this.setState({menuState: !this.state.menuState});
        if (!this.state.menuState) {
            document.getElementById("menuAction").style.cssText = " direction:rtl;width: calc(100% - 40px); ";
            document.getElementById("iconMenuOpen").style.cssText = " display:none ";
            document.getElementById("iconMenuClose").style.cssText = " display:inline ";
            document.getElementById("menuItemsView").style.cssText = " display:flex ";
        }
        if (this.state.menuState) {
            document.getElementById("menuAction").style.cssText = "width: 0; ";
            document.getElementById("iconMenuClose").style.cssText = " display:none ";
            document.getElementById("iconMenuOpen").style.cssText = " display:inline ";
            document.getElementById("menuItemsView").style.cssText = " display:none ";
        }
    };
    hover_items = (itemID) => {

        document.getElementById(itemID).style.cssText = "display:none";
    };

    render() {
        return (
            <div className="a__allContainerMenu">
                {/*<div className="a__skinMenu">*/}
                    <div className="a__containerMenu">
                        <div className="a__innerContainerMenu">
                            <img className="iconMenuLogo" src="media/img/logo/logo.png" alt=""/>
                            <div className="a__test pointer" onClick={this.menu}>
                                <img id="iconMenuOpen" src="media/img/icons/menu.svg" alt=""/>
                                <img id="iconMenuClose" src="media/img/icons/close.png" alt=""/>
                            </div>

                        </div>

                    </div>
                {/*</div>*/}

                <div id='menuAction' className="a__menuPage">
                    <div id='menuItemsView' className="a__menuItemsView">
                        <MenuItem
                            id={'item1'}
                            itemHover={this.hover_items}
                            textItemMenu={"hosein"}
                        />
                        <MenuItem
                            id={'item2'}
                            itemHover={this.hover_items}
                            textItemMenu={"yarzade"}
                        />

                    </div>
                </div>

            </div>
        );

    }

}

export default menuContainer;