import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

type PaginationProps = {
  onPageChange?: (page: number) => void;
  pageCount?: number;
  currentPage: number;
};

export const Pagination: FC<PaginationProps> = ({ currentPage, onPageChange, pageCount = 10 }) => {
  return (
    <ReactPaginate
      containerClassName={styles.pagination}
      nextClassName={styles.next}
      previousClassName={styles.previous}
      activeClassName={styles.selected}
      pageClassName={styles.page}
      breakClassName={styles.break}
      breakLabel='...'
      nextLabel={null}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel={null}
      renderOnZeroPageCount={null}
      initialPage={currentPage - 1}
      onPageChange={({ selected }) => onPageChange?.(selected + 1)}
    />
  );
};
