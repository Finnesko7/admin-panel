import React from "react";
import {Card, CardBody, CardTitle, Col, Row, Input} from "reactstrap";

const RcSingle = () => {

    return (
            <Row>
                <Col>
                    <Card className="main-card mb-3">
                        <CardBody>
                            <CardTitle>Редактирование новостройки</CardTitle>

                            <Row>
                                <Col md="3">
                                        <Input type="text"  className="form-control" placeholder="Название" />

                                        <Input type="text" className="form-control" placeholder="Название" />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
    )
}

export default RcSingle