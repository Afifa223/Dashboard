import React from "react";
import "../Css/Pagination.css";

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const go = (p) => setCurrentPage(Math.min(Math.max(p, 1), totalPages));

  return (
    <div className="pagination">
      <button onClick={() => go(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={p === currentPage ? "active" : ""}
          onClick={() => go(p)}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => go(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
