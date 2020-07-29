import React from "react";
import {
    CardBody,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Input,
    Label,
    Row,
    UncontrolledButtonDropdown
} from "reactstrap";

const RcSingleSettings = () => {

    return (
        <>
            <h6>Настройки</h6>
            <Row className="mb-2">
                <Col md="2">
                    <Label>&nbsp;</Label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <span>Отображать на сайте</span>
                            </div>
                        </div>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret className="form-control" color="primary">
                                Да
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Нет</DropdownItem>
                                <DropdownItem>Да</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                </Col>

                <Col md="3">
                    <Label>&nbsp;</Label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <span>Сгруппировать квартиры</span>
                            </div>
                        </div>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret className="form-control" color="primary">
                                Да
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Нет</DropdownItem>
                                <DropdownItem>Да</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                </Col>

                <Col md="2">
                    <Label>&nbsp;</Label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <span>Рассрочка</span>
                            </div>
                        </div>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret className="form-control" color="primary">
                                Да
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Нет</DropdownItem>
                                <DropdownItem>Да</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                </Col>

                <Col md="2">
                    <Label>&nbsp;</Label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <span>Первый взнос</span>
                            </div>
                        </div>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret className="form-control" color="primary">
                                Да
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Нет</DropdownItem>
                                <DropdownItem>Да</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                </Col>

                <Col md="2">
                    <Label>&nbsp;</Label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <span>Без процентов</span>
                            </div>
                        </div>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle caret className="form-control" color="primary">
                                Да
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Нет</DropdownItem>
                                <DropdownItem>Да</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md="2">
                    <Label>Порядок сортировки</Label>
                    <Input type="text" placeholder="" />
                </Col>

                <Col md="3">
                    <Label>Название кнопки с заявкой</Label>
                    <Input type="text" placeholder="" />
                </Col>
            </Row>

        </>
    )
}

export default RcSingleSettings