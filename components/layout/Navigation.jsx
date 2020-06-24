import React from "react";
import MetisMenu from 'react-metismenu';
import {MainNav, ListNav, WidgetsNav, NewBuild, HrNav, SeoNav, FeedbackNav} from './NavItems';

const Navigation = () => (
    <>
        <h5 className="app-sidebar__heading">Menu</h5>
        <MetisMenu content={MainNav} className="vertical-nav-menu" iconNamePrefix=""
                   classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Списки</h5>
        <MetisMenu content={ListNav} className="vertical-nav-menu" iconNamePrefix=""
                   classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">HR Managers</h5>
        <MetisMenu content={HrNav} className="vertical-nav-menu" iconNamePrefix=""
                   classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Новостройки</h5>
        <MetisMenu content={NewBuild} className="vertical-nav-menu" iconNamePrefix=""
                   classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">SEO</h5>
        <MetisMenu content={SeoNav} className="vertical-nav-menu" iconNamePrefix=""
                   classNameStateIcon="pe-7s-angle-down"/>
        <h5 className="app-sidebar__heading">Отзывы</h5>
        <MetisMenu content={FeedbackNav} className="vertical-nav-menu" iconNamePrefix=""
                   classNameStateIcon="pe-7s-angle-down"/>
    </>
)

export default Navigation;