import React, {useRef, useState} from "react";
import {Card, CardBody, UncontrolledButtonDropdown, Col, Input, Row, DropdownToggle,
    DropdownMenu, DropdownItem} from "reactstrap";

const RcSearchPanel = () => {
    const [textDropdown, setTextDropdown] = useState('Все')
    const rcName = useRef('')
    const devName = useRef('')
    const address = useRef('')
    const active = useRef('all')

    const setActive = (text, system) => {
        setTextDropdown(text);
        active.current = system;
    }

    return (
        <Row>
            <Col>
                <Card className="main-card mb-2">
                    <CardBody>
                        <Row>
                            <Col md="3">
                                <Input innerRef={rcName} type="text" placeholder="Название ЖК"/>
                            </Col>

                            <Col md="3">
                                <Input innerRef={devName} type="text" placeholder="Застройщик"/>
                            </Col>

                            <Col md="4">
                                <Input innerRef={address} type="text" placeholder="Адрес"/>
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