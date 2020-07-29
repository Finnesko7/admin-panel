import React from "react";
import {CardBody, Col, Input, Label, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleUp, faBuilding, faHome} from "@fortawesome/free-solid-svg-icons";

const RcSingleMain = ({ruNameRc}) => {

    return (
        <>
            <Row className="p-2">
                <Col md="3">
                    <Input type="text" className="form-control" placeholder="Название (ru)" innerRef={ruNameRc}/>
                </Col>

                <Col md="3">
                    <Input type="text" className="form-control" placeholder="Название (ua)"/>
                </Col>

                <Col md="2">
                    <div className="input-group">
                        <div className="input-group-prepend" title="Дом">
                            <Label className="input-group-text">
                                <FontAwesomeIcon icon={faBuilding}/>
                            </Label>
                        </div>
                        <Input type="text" placeholder=""/>
                    </div>
                </Col>

                <Col md="2">
                    <div className="input-group">
                        <div className="input-group-prepend" title="Этажность">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon={faAngleDoubleUp}/>
                            </div>
                        </div>
                        <Input type="text" placeholder=""/>
                    </div>
                </Col>

                <Col md="2">
                    <div className="input-group">
                        <div className="input-group-prepend" title="Колличество квартир">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon={faHome}/>
                            </div>
                        </div>
                        <Input type="text" placeholder=""/>
                    </div>
                </Col>
            </Row>

            <Row className="p-2">
                <Col md="3">
                    <Label>Застройщик</Label>
                    <Input type="text" placeholder="Застройщик"/>
                </Col>

                <Col md="3">
                    <Label>Топономическа зона</Label>
                    <Input type="text" placeholder="Топономическа зона"/>
                </Col>

                <Col md="3">
                    <Label>Район</Label>
                    <Input type="text" placeholder="Район"/>
                </Col>

                <Col md="3">
                    <Label>Технология строительства</Label>
                    <Input type="text" placeholder="Район"/>
                </Col>
            </Row>

            <Row className="p-2">
                <Col md="4">
                    <Label>Адресс (ru)</Label>
                    <Input type="text" placeholder="Адресс (ru)"/>
                </Col>

                <Col md="4">
                    <Label>Адресс (ua)</Label>
                    <Input type="text" placeholder="Адресс (ua)"/>
                </Col>
            </Row>

            <hr/>
        </>
    )
}

export default RcSingleMain