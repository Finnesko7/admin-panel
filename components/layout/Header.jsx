import React, {useState} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Hamburger from 'react-hamburgers';
import UserBox from "./UserBox";
import Logo from "./Logo";

const Header = () => {

    return (
        <>
            <ReactCSSTransitionGroup
                component="div"
                className="app-header"
                transitionName="HeaderAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}>
                <Logo/>
                <div className="app-header__content">
                    <div className="app-header-left">
                    </div>
                    <div className="app-header-right">
                        <UserBox/>
                    </div>
                </div>
            </ReactCSSTransitionGroup>
        </>
    )
}

export default Header;