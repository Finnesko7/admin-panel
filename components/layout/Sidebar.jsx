import React, {useState, useEffect} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Navigation from "./Navigation";
import Logo from "./Logo";

const Sidebar = () => {

    const [image, setImage] = useState("city1.jpg")

    useEffect(() => {
        setTimeout(() => {
            // setImage()
        }, 5000)
    })

    return (
        <>
            <ReactCSSTransitionGroup
                component="div"
                className="app-sidebar sidebar-shadow"
                transitionName="SidebarAnimation"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnter={false}
                transitionLeave={false}>
                <Logo/>
                <PerfectScrollbar>
                    <div className="app-sidebar__inner">
                        <Navigation/>
                    </div>
                </PerfectScrollbar>
                <div
                    className="app-sidebar-bg"
                    style={{
                        backgroundImage:'url(/images/sidebar/city1.jpg)'
                    }}>
                </div>
            </ReactCSSTransitionGroup>
        </>
    )
}

export default Sidebar;