import { FC } from 'react';
import clsx from 'clsx';
import styles from './spinner.module.scss';

type SpinnerProps = {
  size?: 'md' | 'sm';
  variant?: 'primary' | 'secondary';
};

export const Spinner: FC<SpinnerProps> = ({ size = 'md', variant = 'primary' }) => {
  return (
    <div className={clsx(styles.container, styles[size], styles[variant])}>
      <div className={styles.spinner}></div>
    </div>
  );
};
