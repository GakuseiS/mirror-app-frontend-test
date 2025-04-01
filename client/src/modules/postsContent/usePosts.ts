import { useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  INF_POSTS_QUERY_KEY,
  POSTS_QUERY_KEY,
  usePostsQuery,
  usePostsQueryInfinite,
} from '../../services/posts/posts.queries';
import { useSettings } from '../../hooks/useSettings';

export const usePosts = () => {
  const { settings, isSettingsReady, layoutCols, layoutRows, layout } = useSettings();
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const client = useQueryClient();
  const { infPostsData, isInfPostsFetching, fetchNextInfPosts } = usePostsQueryInfinite({
    page: page,
    limit: layoutCols * layoutRows,
    enabled: !!isSettingsReady && settings?.navigation === 'load-more',
  });
  const { postsData, isPostsFetching } = usePostsQuery({
    page: page,
    limit: layoutCols * layoutRows,
    enabled: !!isSettingsReady && settings?.navigation === 'pagination',
  });

  const posts = useMemo(() => {
    const navigation = settings?.navigation;
    if (!navigation) return;
    if (navigation === 'load-more') return infPostsData;
    if (navigation === 'pagination') return postsData;
  }, [infPostsData, postsData, settings?.navigation]);

  useEffect(() => {
    if (!isSettingsReady) {
      client.resetQueries({ queryKey: [INF_POSTS_QUERY_KEY] });
      client.resetQueries({ queryKey: [POSTS_QUERY_KEY] });
      setPage(1);
    }
  }, [isSettingsReady, client]);

  useEffect(() => {
    if (!isSettingsReady) {
      setLoading(true);
    } else if (!isInfPostsFetching || !isPostsFetching) {
      setLoading(false);
    }
  }, [isSettingsReady, isInfPostsFetching, isPostsFetching]);

  return {
    isLoading,
    posts,
    settings,
    page,
    layoutCols,
    layout,
    isInfPostsFetching,
    setPage,
    fetchNextInfPosts,
  };
};
