import React, {useEffect, useState, useRef} from "react";
import {Card, CardBody, CardTitle, Col, Row, Table} from "reactstrap";
import api from "../../config/api";
import Pagination from "../utils/Pagination";
import {faCheckCircle, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import Link from "next/link";

const pageSize = 10;

const getRealtyLis = async (page, pageSize, filters) => {
    let url = `/api/rc-list?page=${page}&pageSize=${pageSize}`;
    console.log("filters: ", filters)
    if (filters.rcName) url += `&rcName=${filters.rcName}`
    if (filters.devName) url += `&devName=${filters.devName}`
    if (filters.address) url += `&address=${filters.address}`
    if (filters.active) url += `&active=${filters.active}`
    const res = await api(url)
    return await res.json();
}

const RcTable = () => {
    const [page, setPage] = useState(1)
    const [rcList, setRcList] = useState([])
    const rcFilters = useSelector(state => state.rcFilters)
    const countPages = useRef(1);
    const allResult = useRef(0);

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
        getRealtyLis(page, pageSize, rcFilters).then(data => {
            allResult.current = data.count;
            countPages.current = Math.ceil(Number(data.count / pageSize));
            setRcList(data.rows)
        })
    }, [setRcList, page, rcFilters])


    return (
        <>
            <Row>
                <Col lg="12">
                    <Card className="main-card mb-3">
                        <CardBody>
                            <CardTitle>Всего результатов:
                                {allResult.current}
                            </CardTitle>
                            <Table hover className="mb-0">
                                <thead>
                                <tr>
                                    {fields.map((field, key) => <th key={key}>{field}</th>)}
                                </tr>
                                </thead>
                                <tbody>
                                {rcList.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name_ru}</td>
                                            <td>{item.rcDeveloper.name_ru}</td>
                                            <td>{item.alias}</td>
                                            <td>{item.address_ru}</td>
                                            <td>{item.is_active ?
                                                <FontAwesomeIcon color="primary" icon={faCheckCircle}/> : ''}</td>
                                            <td>
                                                <Link href="/rc/[pid]" as={`/rc/${item.id}`}>
                                                    <span className="icon-pointer"><FontAwesomeIcon
                                                        icon={faEdit} color="primary"/> </span>
                                                </Link>
                                                &nbsp;
                                                <span className="icon-pointer">
                                                    <FontAwesomeIcon icon={faTrash} color="Tomato"/> </span>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        </CardBody>
                        <Row className="justify-content-center">
                            <Pagination callback={changePage} countPages={countPages.current} currentPage={page}/>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default RcTable