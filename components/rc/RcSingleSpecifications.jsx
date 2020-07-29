import React from "react";
import {CardBody, Col, Input, Label, Row} from "reactstrap";

const RcSingleSpecifications = () => {

    return (
        <>
            <h6>Характеристики</h6>
            <Row className="mb-2">
                <Col md="3">
                    <Label>Стены</Label>
                    <Input type="text" placeholder="Стены"/>
                </Col>

                <Col md="3">
                    <Label>Утепление</Label>
                    <Input type="text" placeholder="Утепление"/>
                </Col>

                <Col md="3">
                    <Label>Отопление</Label>
                    <Input type="text" placeholder="Отопление"/>
                </Col>

                <Col md="3">
                    <Label>Электричество</Label>
                    <Input type="text" placeholder="Электричество"/>
                </Col>
            </Row>

            <Row className="mb-2">
                <Col md="3">
                    <Label>Высота потолков</Label>
                    <Input type="text" placeholder="Высота потолков"/>
                </Col>

                <Col md="3">
                    <Label>Территория</Label>
                    <Input type="text" placeholder="Территория"/>
                </Col>

                <Col md="3">
                    <Label>Тип парковки</Label>
                    <Input type="text" placeholder=""/>
                </Col>

                <Col md="3">
                    <Label>Обслуживание</Label>
                    <Input type="text" placeholder=""/>
                </Col>
            </Row>

            <Row className="mb-2">
                <Col md="3">
                    <Label>Рассрочка</Label>
                    <Input type="text" placeholder=""/>
                </Col>

                <Col md="3">
                    <Label>Координаты</Label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">x:</span>
                        </div>
                        <Input type="text" className="form-control"/>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">y:</span>
                        </div>
                        <Input type="text" className="form-control"/>
                    </div>
                </Col>
            </Row>
            <hr/>
        </>
    )
}

export default RcSingleSpecifications