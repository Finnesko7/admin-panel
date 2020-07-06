import React, {useEffect, useState} from "react";
import {Row, Col, Card, CardBody, CardTitle, Table} from "reactstrap";
import api from "../config/api";

const getCandidates = async (page, pageSize) => {
    const res = await api(`http://localhost:4001/api/candidates?page=${page}&pageSize=${pageSize}`)
    const candidates = await res.json()

    console.log("candidates", candidates)

    return candidates;
}

function TableCandidates() {

    const [candidates, setCandidates] = useState([])

    const fields = [
        'Дата создания',
        'ФИО',
        'Phone',
        'Email',
        'Position',
        'Test result',
        'Action'
    ];

    useEffect(() => {
        getCandidates(1, 10).then(data => {
            setCandidates(data.candidates)
        })
    }, [setCandidates])

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
                            {candidates.map(candidate => {
                                return (<tr>
                                    <th scope="row">{candidate.id}</th>
                                    <td>
                                        {`${candidate.name} ${candidate.soname}`}
                                    </td>
                                    <td>{candidate.phone}</td>
                                    <td>{candidate.email}</td>
                                </tr>)
                            })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default TableCandidates;