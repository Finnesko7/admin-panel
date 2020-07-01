import React from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import {Card, CardBody, Col} from "reactstrap";

const AllCandidates = () => {
    return (
        <div className="app-container app-theme-white fixed-header fixed-sidebar fixed-footer">
            <Header/>
            <div className="app-main">
                <Sidebar/>
                <div className="app-main__outer">
                    <div className="app-main__inner">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCandidates