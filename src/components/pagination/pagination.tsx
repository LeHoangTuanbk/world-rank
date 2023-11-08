import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "./pagination.scss";

type PaginationProps = {
  currentPage: number;
  numberOfPages: number;
  prePage: () => void;
  nextPage: () => void;
  goToPage: (pageNumber: number) => void;
};

function Pagination({
  currentPage,
  numberOfPages,
  prePage,
  nextPage,
  goToPage,
}: PaginationProps) {
  const pageNumbers = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button onClick={prePage}>
        <GrFormPrevious />
      </button>
      {pageNumbers.map((pageNumber) => {
        if (pageNumber === currentPage) {
          return (
            <span
              key={pageNumbers.toString()}
              className="pagination__index active"
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </span>
          );
        } else {
          return (
            <span
              key={pageNumbers.toString()}
              className="pagination__index"
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </span>
          );
        }
      })}

      <button onClick={nextPage}>
        <GrFormNext />
      </button>
    </div>
  );
}

export default Pagination;
