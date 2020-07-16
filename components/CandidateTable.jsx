import React, {useEffect, useState, useRef, Suspense} from "react";
import {Row, Col, Card, CardBody, CardTitle, Table} from "reactstrap";
import api from "../config/api";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudDownloadAlt, faFilePdf, faAddressCard, faTrash} from '@fortawesome/free-solid-svg-icons'
import Pagination from "./utils/Pagination";
import dynamic from "next/dynamic";

const ModalCandidate = dynamic(() => import('./CandidateModal'), {
    loading: () => <p>Loading ...</p>,
    ssr: false
})
const pageSize = 10;

const getCandidates = async (page, pageSize) => {
    const res = await api(`http://localhost:4001/api/candidates?page=${page}&pageSize=${pageSize}`)
    const candidates = await res.json()

    return candidates;
}

function CandidateTable() {

    const [candidates, setCandidates] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [page, setPage] = useState(1)
    const number = useRef(1);
    const fields = [
        'Дата создания',
        'ФИО',
        'Phone',
        'Email',
        'Должность',
        <FontAwesomeIcon icon={faFilePdf}/>,
        ''
    ];

    useEffect(() => {
        getCandidates(page, pageSize).then(data => {
            data.candidates.countPages = data.countPages;
            setCandidates(data.candidates)
        })
    }, [setCandidates, page])

    const changePage = (page) => {
        setPage(page)
    }

    const showCandidate = (show = true) => {
        console.log("show user card")
        setShowModal(show)
    }

    number.current = Number((page - 1) * pageSize + 1);

    return (
        <>
            <Row>
                <Col lg="12">
                    <Card className="main-card mb-3">
                        <CardBody>
                            <CardTitle>Список кандидатов</CardTitle>
                            <Table hover className="mb-0">
                                <thead>
                                <tr>
                                    {fields.map((field, key) => <th key={key}>{field}</th>)}
                                </tr>
                                </thead>
                                <tbody>
                                {candidates.map(candidate => {
                                    return (<tr key={candidate.id}>
                                        <th scope="row">{number.current++}</th>
                                        <td>
                                            {`${candidate.name} ${candidate.soname}`}
                                        </td>
                                        <td>{candidate.phone}</td>
                                        <td>{candidate.email}</td>
                                        <td>{candidate.category.name}</td>
                                        <td>
                                            <a href="#" title=" Результат тестов"><FontAwesomeIcon
                                                icon={faCloudDownloadAlt}/></a>
                                        </td>
                                        <td>
                                            <span className="icon-pointer" onClick={showCandidate}><FontAwesomeIcon
                                                icon={faAddressCard} color="gray"/> </span>
                                            &nbsp;
                                            <span className="icon-pointer"><FontAwesomeIcon icon={faTrash}
                                                                                            color="Tomato"/> </span>
                                        </td>
                                    </tr>)
                                })}
                                </tbody>
                            </Table>
                        </CardBody>
                        <Row className="justify-content-center">
                            <Pagination callback={changePage} countPages={candidates.countPages} currentPage={page}/>
                        </Row>
                    </Card>
                </Col>
            </Row>
            {showModal && <ModalCandidate cbCloseModal={showCandidate}/>}
        </>
    )
}

export default CandidateTable;