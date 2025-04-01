import { FC, ReactNode } from 'react';
import styles from './textField.module.scss';

type TextFieldProps = {
  label?: string;
  children?: ReactNode;
};

export const TextField: FC<TextFieldProps> = ({ label, children }) => {
  if (!children) return;

  return (
    <div className={styles.container}>
      {label ? <label className={styles.label}>{label}</label> : null}
      <div className={styles.field}>{children}</div>
    </div>
  );
};
