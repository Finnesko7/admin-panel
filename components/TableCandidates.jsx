import React from "react";
import DefaultTable from "./utils/DefaultTable";
import {Row, Col, Card, CardBody, CardTitle} from "reactstrap";

const TableCandidates = () => {

    const fields =  [
        'Дата создания',
        'ФИО',
        'Phone',
        'Email',
        'Position',
        'Test result',
        'Action'
    ];

    console.log("fields >>> ", )

    return (
        <Row>
            <Col lg="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        <CardTitle>Список кандидатов</CardTitle>
                        <DefaultTable fields={fields}/>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default TableCandidates;