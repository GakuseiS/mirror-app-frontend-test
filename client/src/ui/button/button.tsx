import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';
import { Spinner } from '../spinner';

type ButtonProps = {
  children?: ReactNode;
  onClick?: VoidFunction;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm';
  className?: string;
  fitContent?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  size,
  className,
  fitContent,
  disabled,
  loading,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        variant && styles[variant],
        size && styles[size],
        fitContent && styles.fitContent,
        className,
      )}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <Spinner size='sm' variant='secondary' /> : null}
      {children}
    </button>
  );
};
