import { FC } from 'react';
import { TPost } from '../../services/posts/posts.types';
import { PostCard } from '../postCard';
import styles from './layout.module.scss';

type LayoutProps = {
  posts: TPost[];
  variant: 'grid' | 'masonry';
  template: 'hover' | 'classic';
  colsCount: number;
};

export const Layout: FC<LayoutProps> = ({ posts, variant, template, colsCount }) => {
  switch (variant) {
    case 'grid':
      return (
        <div className={styles.grid} style={{ gridTemplateColumns: `repeat(${colsCount}, 1fr)` }}>
          {posts?.map((post) => (
            <PostCard
              description={post.caption}
              author={post.user.username}
              date={post.date}
              likesCount={post.likes}
              commentsCount={post.comments}
              key={post.id}
              variant={template}
            />
          ))}
        </div>
      );
    case 'masonry':
      return (
        <div className={styles.masonry}>
          {Array(colsCount)
            .fill(0)
            .map((_, colIdx) => (
              <div key={`col_${colIdx}`} className={styles.masonryCol}>
                {posts.map((post, postIdx) => {
                  if (postIdx % colsCount === colIdx) {
                    return (
                      <PostCard
                        description={post.caption}
                        author={post.user.username}
                        date={post.date}
                        likesCount={post.likes}
                        commentsCount={post.comments}
                        key={post.id}
                        variant={template}
                      />
                    );
                  }
                })}
              </div>
            ))}
        </div>
      );
    default:
      return null;
  }
};
