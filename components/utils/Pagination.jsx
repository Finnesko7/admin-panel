import React from "react";
import PaginationButton from "./PaginationButton";


const Pagination = ({callback, countPages, currentPage}) => {

    const prev = () => {
        let page = currentPage - 1;
        if (page > 0) callback(page)
    }

    const next = () => {
        let page = currentPage + 1;
        if (page < countPages) callback(page)
    }

    return (
        <ul className="pagination">
            <li className="page-item">
                <a className="page-link" onClick={prev} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

            {(currentPage - 2) > 1 &&
            <>
                <PaginationButton callback={callback} number={1} page={currentPage}/>
                <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
            </>
            }

            {countPages > (currentPage - 2) && (currentPage - 2) > 0 && <PaginationButton callback={callback} number={currentPage-2} page={currentPage}/>}
            {countPages > (currentPage - 1) && (currentPage - 1) > 0 && <PaginationButton callback={callback} number={currentPage-1} page={currentPage}/>}
            {countPages >= currentPage && <PaginationButton callback={callback} number={currentPage} page={currentPage}/>}
            {countPages >= (currentPage + 1) && <PaginationButton callback={callback} number={currentPage+1} page={currentPage}/>}
            {countPages >= (currentPage + 2) && <PaginationButton callback={callback} number={currentPage+2} page={currentPage}/>}


            {countPages > (currentPage + 2) &&
                <>
                <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
                    <PaginationButton callback={callback} number={countPages} page={currentPage}/>
                </>
            }

            <li className   ="page-item">
                <a className="page-link" onClick={next} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    )
}

export default Pagination