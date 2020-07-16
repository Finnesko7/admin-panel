import React, {useState} from "react";
import {Modal, Button, ModalHeader, ModalBody, ModalFooter} from "reactstrap"

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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={close}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CandidateModal