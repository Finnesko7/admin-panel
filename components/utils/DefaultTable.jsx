import React from "react";
import {Table} from "reactstrap"

const DefaultTable = ({fields}) => (
    <Table hover className="mb-0">
        <thead>
        <tr>
            {fields.map(field => <th>{field}</th>)}
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        </tbody>
    </Table>
)

export default DefaultTable;