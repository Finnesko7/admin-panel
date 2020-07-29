import React from "react";
import {Col, Input, Label, Row} from "reactstrap";

const RcSingleAdditional = () => {
    return (
        <>
            <h6>Дополнительная информация</h6>

            <Row className="mb-2">
                <Col md="6">
                    <Label>Описание (ru):</Label>
                    <textarea className="form-control"></textarea>
                </Col>

                <Col md="6">
                    <Label>Описание (ua):</Label>
                    <textarea className="form-control"></textarea>
                </Col>
            </Row>

            <Row className="mb-2">
                <Col md="3">
                    <Input type="text" placeholder="Ссылка на сайт" />
                </Col>

                <Col md="3">
                    <Input type="text" placeholder="Ссылка на видеообзор" />
                </Col>
            </Row>

            <hr/>
        </>
    )
}

export default RcSingleAdditional