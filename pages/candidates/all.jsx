import React from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import CandidateTable from "../../components/CandidateTable";

const AllCandidates = () => {
    return (
        <div className="app-container app-theme-white fixed-header fixed-sidebar fixed-footer">
            <Header/>
            <div className="app-main">
                <Sidebar/>
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <CandidateTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCandidates