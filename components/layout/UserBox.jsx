import React, {Fragment} from "react";
import {
    DropdownToggle, DropdownMenu,
    Nav, NavItem, NavLink,
    UncontrolledButtonDropdown
} from 'reactstrap';



const UserBox = () => {
    return (
        <Fragment>
            <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                    <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                            <UncontrolledButtonDropdown>
                                <DropdownToggle color="link" className="p-0">
                                    <img width={42} className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7FFrxhGko3hUyRhuXBo8cpFfx_cdN5z6syFiBHJBJNUyl2SFf&usqp=CAU" alt=""/>
                                </DropdownToggle>
                                <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                                    <Nav vertical>
                                        <NavItem className="nav-item-header">
                                            Activity
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">
                                                Chat
                                                <div className="ml-auto badge badge-pill badge-info">8</div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">Recover Password</NavLink>
                                        </NavItem>
                                        <NavItem className="nav-item-header">
                                            My Account
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">
                                                Settings
                                                <div className="ml-auto badge badge-success">New</div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">
                                                Messages
                                                <div className="ml-auto badge badge-warning">512</div>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">
                                                Logs
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                        </div>
                        <div className="widget-content-left  ml-3 header-user-info">
                            <div className="widget-heading">
                                Alina Mclourd
                            </div>
                            <div className="widget-subheading">
                               Role Name
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UserBox;