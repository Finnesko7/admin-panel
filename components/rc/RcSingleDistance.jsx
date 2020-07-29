import React from "react";
import {Col, Input, Label, Row} from "reactstrap";

const RcSingleDistance = () => {
    return (
        <>
            <h6>Расстояние (в минутах) </h6>
            <Row>
                <Col md="1">
                    <Label>до центра</Label>
                    <Input type="text" placeholder=""/>
                </Col>

                <Col md="1">
                    <Label>до моря</Label>
                    <Input type="text" placeholder=""/>
                </Col>

                <Col md="1">
                    <Label>до магазина</Label>
                    <Input type="text" placeholder=""/>
                </Col>

                <Col md="1">
                    <Label>до школы</Label>
                    <Input type="text" placeholder=""/>
                </Col>

                <Col md="1">
                    <Label>до дет сада</Label>
                    <Input type="text" placeholder=""/>
                </Col>

                <Col md="2">
                    <Label>до бизнесс центра</Label>
                    <Input type="text" placeholder=""/>
                </Col>
            </Row>
            <hr/>
        </>
    )
}

export default RcSingleDistance