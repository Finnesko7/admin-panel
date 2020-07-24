import React, {useRef, useState} from "react";
import {debounce} from "lodash";
import {Card, CardBody, UncontrolledButtonDropdown, Col, Input, Row, DropdownToggle,
    DropdownMenu, DropdownItem} from "reactstrap";
import {setFilters} from "../../lib/reducers/rc-filters";
import {useDispatch} from 'react-redux';


const RcSearchPanel = () => {
    const [textDropdown, setTextDropdown] = useState('Все')
    const rcName = useRef('')
    const devName = useRef('')
    const address = useRef('')
    const active = useRef('all')
    const dispatch = useDispatch();

    const setActive = (text, system) => {
        setTextDropdown(text);
        active.current = system;
        setRcFilters();
    }

    const debounceFilter = debounce(() => {
        console.log("Call set filters")
        setRcFilters();
    }, 2000)

    const setRcFilters = () => {
        dispatch(setFilters({
            rcName: rcName.current.value,
            devName: devName.current.value,
            address: address.current.value,
            active: active.current
        }))
    }

    return (
        <Row>
            <Col>
                <Card className="main-card mb-2">
                    <CardBody>
                        <Row>
                            <Col md="3">
                                <Input innerRef={rcName} onChange={debounceFilter} type="text" placeholder="Название ЖК"/>
                            </Col>

                            <Col md="3">
                                <Input innerRef={devName} onChange={debounceFilter} type="text" placeholder="Застройщик"/>
                            </Col>

                            <Col md="4">
                                <Input innerRef={address}  onChange={debounceFilter}type="text" placeholder="Адрес"/>
                            </Col>
                            <Col md="2">
                                <UncontrolledButtonDropdown>
                                    <DropdownToggle caret className="form-control" color="primary">
                                        {textDropdown}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={() => setActive('Активные', 'active')}>Активные</DropdownItem>
                                        <DropdownItem onClick={() => setActive('Не активные', 'not-active')}>Не активные</DropdownItem>
                                        <DropdownItem onClick={() => setActive('Все', 'all')}>Все</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default RcSearchPanel