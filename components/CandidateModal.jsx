import React, {useState} from "react";
import {
    Modal, Button, ModalHeader, ModalBody, ModalFooter,
    Row, Input, Col
} from "reactstrap"

const CandidateModal = ({cbCloseModal}) => {

    const [open, setOpen] = useState(true)

    const close = () => {
        setOpen(!open)
        cbCloseModal(false)
    }

    return (
        <Modal
            isOpen={open}
            size="lg" centered
            aria-labelledby="contained-modal-title-vcenter"
        >
            <ModalHeader >Редактирование кандидата</ModalHeader>
            <ModalBody>
                   <Row>
                       <Col md="6">
                           <Input type="text" name="email"
                                  placeholder="Им"
                           />
                       </Col>
                       <Col md="6">
                           <Input type="email" name="email"
                                  placeholder="example@mail.com"
                           />
                       </Col>
                   </Row>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={close}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CandidateModal