import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

class Pagination extends Component {
  render() {
    console.log(this.props.currentPage);
    const pageCount = Math.ceil(this.props.itemCount / this.props.pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              style={{ cursor: "pointer" }}
              className={
                page === this.props.currentPage
                  ? "page-item active"
                  : "page-item"
              }
            >
              <button
                onClick={() => this.props.onPageChange(page)}
                className="page-link"
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
