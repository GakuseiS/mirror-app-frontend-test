import { FC } from 'react';
import clsx from 'clsx';
import { Button } from '../../ui/button';
import { Pagination } from '../../ui/pagination';
import styles from './pagination.module.scss';

type PaginationProps = {
  variant: 'pagination' | 'load-more';
  className?: string;
  isLoading: boolean;
  onLoadMore?: () => void;
  onPageChange?: (page: number) => void;
  currentPage: number;
};

export const PaginationContainer: FC<PaginationProps> = ({
  className,
  variant,
  isLoading,
  currentPage,
  onLoadMore,
  onPageChange,
}) => {
  switch (variant) {
    case 'load-more':
      return (
        <div className={clsx(styles.pagination, className)}>
          <Button variant='primary' size='md' fitContent loading={isLoading} onClick={onLoadMore}>
            Загрузить еще
          </Button>
        </div>
      );
    case 'pagination':
      return <Pagination currentPage={currentPage} onPageChange={onPageChange} />;
    default:
      return null;
  }
};
