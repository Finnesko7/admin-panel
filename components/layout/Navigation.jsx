import React, {useState} from "react";
import MetisMenu from 'react-metismenu';
import CustomLink from "./CustomLink";
import {MainNav, ListNav, NewBuild, HrNav, SeoNav, FeedbackNav} from './NavItems';

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('Home page')

    const setActive = (e) => {
        console.log("selected: ", e.newLocation)
        setActiveLink(e.newLocation)
    }

    return (
        <>
            <h5 className="app-sidebar__heading">Menu</h5>
            <MetisMenu content={MainNav} className="vertical-nav-menu" iconNamePrefix="" LinkComponent={CustomLink}
                       activeLinkTo={activeLink}
                       onSelected={setActive}
                       classNameStateIcon="pe-7s-angle-down"/>
            <h5 className="app-sidebar__heading">Списки</h5>
            <MetisMenu content={ListNav} className="vertical-nav-menu" iconNamePrefix="" LinkComponent={CustomLink}
                       activeLinkTo={activeLink}
                       onSelected={setActive}
                       classNameStateIcon="pe-7s-angle-down"/>
            <h5 className="app-sidebar__heading">HR Managers</h5>
            <MetisMenu content={HrNav} className="vertical-nav-menu" iconNamePrefix="" LinkComponent={CustomLink}
                       activeLinkTo={activeLink}
                       onSelected={setActive}
                       classNameStateIcon="pe-7s-angle-down"/>
            <h5 className="app-sidebar__heading">Новостройки</h5>
            <MetisMenu content={NewBuild} className="vertical-nav-menu" iconNamePrefix="" LinkComponent={CustomLink}
                       activeLinkTo={activeLink}
                       onSelected={setActive}
                       classNameStateIcon="pe-7s-angle-down"/>
            <h5 className="app-sidebar__heading">SEO</h5>
            <MetisMenu content={SeoNav} className="vertical-nav-menu" iconNamePrefix="" LinkComponent={CustomLink}
                       // activeLinkTo={activeLink}
                       // onSelected={setActive}
                       classNameStateIcon="pe-7s-angle-down"/>
            <h5 className="app-sidebar__heading">Отзывы</h5>
            <MetisMenu content={FeedbackNav} className="vertical-nav-menu" iconNamePrefix="" LinkComponent={CustomLink}
                       // activeLinkTo={activeLink}
                       // onSelected={setActive}
                       classNameStateIcon="pe-7s-angle-down"/>
        </>
    )
}

export default Navigation;