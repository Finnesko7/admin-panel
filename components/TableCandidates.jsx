import React from "react";
import {Row, Col, Card, CardBody, CardTitle, Table} from "reactstrap";

function TableCandidates ({candidates})  {

    const fields =  [
        'Дата создания',
        'ФИО',
        'Phone',
        'Email',
        'Position',
        'Test result',
        'Action'
    ];

    return (
        <Row>
            <Col lg="12">
                <Card className="main-card mb-3">
                    <CardBody>
                        <CardTitle>Список кандидатов</CardTitle>
                        <Table hover className="mb-0">
                            <thead>
                            <tr>
                                {fields.map(field => <th>{field}</th>)}
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default TableCandidates;