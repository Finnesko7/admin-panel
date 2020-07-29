import React, {useRef} from "react";
import {
    Card,
    CardBody,
    CardTitle, Button
} from "reactstrap";

import RcSingleMain from "./RcSingleMain";
import RcSingleSpecifications from "./RcSingleSpecifications";
import RcSingleDistance from "./RcSingleDistance";
import RcSingleAdditional from "./RcSingleAdditional";
import RcSingleSettings from "./RcSingleSettings";

const RcSingle = () => {

    const testRef = () => {
        console.log("name >>>>", ruNameRc.current.value)
    }

    const ruNameRc = useRef("");

    return (
        <Card className="main-card mb-3">
            <CardBody>
                <CardTitle>Редактирование новостройки</CardTitle>
                <RcSingleMain ruNameRc={ruNameRc} />
                <RcSingleSpecifications />
                <RcSingleDistance />
                <RcSingleAdditional />
                <RcSingleSettings />
                <Button onClick={testRef}>Submit</Button>

            </CardBody>
        </Card>
    )
}

export default RcSingle