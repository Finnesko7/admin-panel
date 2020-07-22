import React, {useEffect, useState} from "react";
import {Card, CardBody, CardTitle, Col, Row, Table} from "reactstrap";
import api from "../config/api";
import Pagination from "./utils/Pagination";
import {faCheckCircle, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const pageSize = 10;

const getRealtyLis = async (page, pageSize) => {
    const res = await api(`/api/rc-list?page=${page}&pageSize=${pageSize}`)
    return await res.json();
}

const RcTable = () => {
    const [page, setPage] = useState(1)
    const [rcList, setRcList] = useState([])

    const fields = [
        'Жилой комплекс',
        'Застройщик',
        'Алиас',
        'Адрес',
        'Активен',
        '',
    ];

    const changePage = (page) => {
        setPage(page)
    }

    useEffect(() => {
        getRealtyLis(page, pageSize).then(data => {
            data.rcList.countPages = data.countPages;
            setRcList(data.rcList)
        })
    }, [setRcList, page])


    return (
        <>
            <Row>
                <Col lg="12">
                    <Card className="main-card mb-3">
                        <CardBody>
                            <CardTitle>Список новостроек</CardTitle>
                            <Table hover className="mb-0">
                                <thead>
                                <tr>
                                    {fields.map((field, key) => <th key={key}>{field}</th>)}
                                </tr>
                                </thead>
                                <tbody>
                                {rcList.map(item => {
                                    return (
                                        <tr>
                                            <td>{item.name_ru}</td>
                                            <td>{item.rcDeveloper.name_ru}</td>
                                            <td>{item.alias}</td>
                                            <td>{item.address_ru}</td>
                                            <td>{item.is_active ? <FontAwesomeIcon color="primary" icon={faCheckCircle}/> : ''}</td>
                                            <td>
                                                <span className="icon-pointer" ><FontAwesomeIcon
                                                    icon={faEdit} color="primary"/> </span>
                                                &nbsp;
                                                <span className="icon-pointer"><FontAwesomeIcon icon={faTrash}
                                                                                                color="Tomato"/> </span>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </CardBody>
                        <Row className="justify-content-center">
                            <Pagination callback={changePage} countPages={rcList.countPages} currentPage={page}/>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default RcTable