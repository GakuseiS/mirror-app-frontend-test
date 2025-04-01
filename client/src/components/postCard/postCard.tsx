import { FC } from 'react';
import clsx from 'clsx';
import { formatDateWithRelativeDays } from '../../utils/dateConvert';
import styles from './postCard.module.scss';

type PostCardProps = {
  description: string;
  author: string;
  date: string;
  likesCount: number;
  commentsCount: number;
  variant: 'classic' | 'hover';
};

export const PostCard: FC<PostCardProps> = ({ description, author, date, likesCount, commentsCount, variant }) => {
  return (
    <div className={clsx(styles.card, variant && styles[variant])}>
      <div className={clsx(styles.section, styles.head)}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={clsx(styles.section, styles.body)}>
        <p className={styles.name}>{author}</p>
        <p className={styles.date}>{formatDateWithRelativeDays(date)}</p>
      </div>
      <div className={clsx(styles.section, styles.footer)}>
        <span>{likesCount} лайков</span>
        <span>{commentsCount} комментария</span>
      </div>
    </div>
  );
};
