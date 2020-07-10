import React from "react";

const PaginationButton = ({callback, number, page}) => {
    const clLink = page === number ? 'page-link active' : 'page-link';

    return (
        <li className="page-item"><a className={clLink} onClick={() => callback(number)}>{number}</a></li>
    )
}

export default PaginationButton