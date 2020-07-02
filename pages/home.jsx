import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import {
    Col, Card, CardBody
} from 'reactstrap';
import RealtyComplexRepository from "../repository/RealtyComplexRepository";

const Home = ({totalRc}) => {

    return (
        <div className="app-container app-theme-white fixed-header fixed-sidebar fixed-footer">
            <Header/>
            <div className="app-main">
                <Sidebar/>
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <Col md="12">
                            <Card className="main-card">
                                <CardBody>
                                    <div className="welcome">Welcome to Admin Panel</div>
                                </CardBody>
                            </Card>
                        </Col>

                        <div className="panel-welcome">
                            <Col md="3">
                                <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                                    <div className="icon-wrapper rounded">
                                        <div className="icon-wrapper-bg bg-white opacity-10"/>
                                        <i className="lnr-apartment icon-gradient bg-warm-flame"/>
                                    </div>
                                    <div className="widget-numbers">
                                        {totalRc}
                                    </div>
                                    <div className="widget-subheading">
                                        Активных новостроек
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const [rc] = await RealtyComplexRepository.getCountRc()

    return {
        props: {
            totalRc: rc.dataValues.count
        }
    }
}

export default Home;
