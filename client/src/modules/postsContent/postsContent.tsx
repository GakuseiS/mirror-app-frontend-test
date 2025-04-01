import { FC } from 'react';
import { Spinner } from '../../ui/spinner';
import { PaginationContainer } from '../../components/pagination';
import { usePosts } from './usePosts';
import { Layout } from '../../components/layout';
import styles from './postsContent.module.scss';

export const PostsContent: FC = () => {
  const { isLoading, posts, settings, page, isInfPostsFetching, layout, fetchNextInfPosts, setPage, layoutCols } =
    usePosts();

  if (!posts || !settings || isLoading || !layout) {
    return (
      <div className={styles.content}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <Layout posts={posts} variant={layout} template={settings.template} colsCount={layoutCols} />
      <PaginationContainer
        className={styles.pagination}
        variant={settings.navigation}
        currentPage={page}
        onLoadMore={fetchNextInfPosts}
        isLoading={isInfPostsFetching}
        onPageChange={setPage}
      />
    </div>
  );
};
