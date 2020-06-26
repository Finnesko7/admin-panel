import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import {
    Col, Card, CardBody
} from 'reactstrap';

const Home = () => (
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
                                            <i className="lnr-screen icon-gradient bg-warm-flame"/>
                                        </div>
                                        <div className="widget-numbers">
                                            17.2k
                                        </div>
                                        <div className="widget-subheading">
                                            Активных новостроек
                                        </div>
                                        <div className="widget-description text-white">
                                            <span className="pr-1">62,7%</span>
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3">
                                    <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                                        <div className="icon-wrapper rounded">
                                            <div className="icon-wrapper-bg bg-white opacity-10"/>
                                            <i className="lnr-screen icon-gradient bg-warm-flame"/>
                                        </div>
                                        <div className="widget-numbers">
                                            17.2k
                                        </div>
                                        <div className="widget-subheading">
                                            Активных новостроек
                                        </div>
                                        <div className="widget-description text-white">
                                            <span className="pr-1">62,7%</span>
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3">
                                    <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                                        <div className="icon-wrapper rounded">
                                            <div className="icon-wrapper-bg bg-white opacity-10"/>
                                            <i className="lnr-screen icon-gradient bg-warm-flame"/>
                                        </div>
                                        <div className="widget-numbers">
                                            17.2k
                                        </div>
                                        <div className="widget-subheading">
                                            Активных новостроек
                                        </div>
                                        <div className="widget-description text-white">
                                            <span className="pr-1">62,7%</span>
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3">
                                    <div className="card mb-3 bg-midnight-bloom widget-chart text-white card-border">
                                        <div className="icon-wrapper rounded">
                                            <div className="icon-wrapper-bg bg-white opacity-10"/>
                                            <i className="lnr-screen icon-gradient bg-warm-flame"/>
                                        </div>
                                        <div className="widget-numbers">
                                            17.2k
                                        </div>
                                        <div className="widget-subheading">
                                            Активных новостроек
                                        </div>
                                        <div className="widget-description text-white">
                                            <span className="pr-1">62,7%</span>
                                            <FontAwesomeIcon icon={faArrowLeft}/>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                </div>
            </div>
        </div>
    </div>
)

export default Home;
