import React from "react";
import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import TableCandidates from "../../components/TableCandidates";
import api from "../../config/api";

const AllCandidates = ({candidates}) => {
    return (
        <div className="app-container app-theme-white fixed-header fixed-sidebar fixed-footer">
            <Header/>
            <div className="app-main">
                <Sidebar/>
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <TableCandidates candidates={candidates}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const paginate = ({ page, pageSize }) => {
    const offset = (page - 1) * pageSize;
    const limit = pageSize;

    return {
        offset,
        limit,
    };
};

export async function getStaticProps() {
    console.log("START ...........................................")
    const candidates = await api('http://localhost:4001/candidates/all')
    console.log("candidates: ", candidates)

    return {
        props: {
            candidates: {
                title: 'test'
            }
        }
    }
}

export default AllCandidates