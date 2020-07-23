import React, {Component} from 'react';
import './lastPart.css';
import ContainerLinksIcon from "../../Molecules/containerLinksIcon/containerLinksIcon";
import DownloadCircle from "../../Molecules/download-circle/download-cirle";


class LastPart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="o__sideLastPart">
                <div className="containerDetail">
                    <DownloadCircle/>
                </div>
                <div className="containerDetailLink">
                    <ContainerLinksIcon
                        addressLink={"https://www.linkedin.com/in/hosein-yarzade-462a0214b"}
                        linkIcon={'./media/img/icons/linkedin.svg'}
                    />
                    <ContainerLinksIcon
                        addressLink={'https://github.com/hosein-yarzade'}
                        linkIcon={'./media/img/icons/github.svg'}
                    />
                    <ContainerLinksIcon
                        addressLink={'https://t.me/js_hosein'}
                        linkIcon={'./media/img/icons/telegram.svg'}
                    />
                    <ContainerLinksIcon
                        addressLink={"https://instagram.com/hosein.yarzadeh?igshid=1wcnygi3vdeiw"}
                        linkIcon={'./media/img/icons/instagram.svg'}
                    />
                </div>
            </div>
        );
    }
}

export default LastPart;
