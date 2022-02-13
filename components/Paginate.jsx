import { useState } from "react";
import ReactPaginate from "react-paginate";
import {useRouter} from 'next/router';

const Paginate = ({ pageCount }) => {
  const router = useRouter()
  const handlePageClick = ({ selected }) => {
    router.push(`${router.pathname}?page=${selected}&size=10`)
  };
  return (
    <div className="d-flex justify-content-center align-items-center my-5 blog-pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item border"
        pageLinkClassName="page-link"
        nextClassName="page-item border"
        previousClassName="page-item border"
        activeClassName="active"
      />
    </div>
  );
};

export default Paginate;
