import { keepPreviousData, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getPosts } from './posts.requests';
import { TPostsResult } from './posts.types';

type PostsQueryParams = {
  page: number;
  limit: number;
  enabled: boolean;
};

type PostsQueryInfiniteResult = {
  infPostsData?: TPostsResult;
  isInfPostsLoading: boolean;
  isInfPostsFetching: boolean;
  fetchNextInfPosts: VoidFunction;
};

export const INF_POSTS_QUERY_KEY = 'posts/infinite';

export const usePostsQueryInfinite = ({ limit, enabled }: PostsQueryParams): PostsQueryInfiniteResult => {
  const queryKey = [INF_POSTS_QUERY_KEY];
  const {
    data: infPostsData,
    isLoading: isInfPostsLoading,
    isFetching: isInfPostsFetching,
    fetchNextPage: fetchNextInfPosts,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => getPosts({ _limit: limit, _page: pageParam, _expand: 'user' }),
    enabled,
    placeholderData: keepPreviousData,
    getNextPageParam: (_, pages) => pages?.length + 1,
    initialPageParam: 1,
  });

  return {
    infPostsData: infPostsData?.pages.flatMap((page) => page) || [],
    isInfPostsLoading,
    isInfPostsFetching,
    fetchNextInfPosts,
  };
};

type PostsQueryResult = {
  postsData?: TPostsResult;
  isPostsLoading: boolean;
  isPostsFetching: boolean;
  refetchPosts: VoidFunction;
};

export const POSTS_QUERY_KEY = 'posts/pagination';

export const usePostsQuery = ({ page, limit, enabled }: PostsQueryParams): PostsQueryResult => {
  const queryKey = [POSTS_QUERY_KEY, { _page: page }];
  const {
    data: postsData,
    isLoading: isPostsLoading,
    isFetching: isPostsFetching,
    refetch: refetchPosts,
  } = useQuery({
    queryKey,
    queryFn: () => getPosts({ _limit: limit, _page: page, _expand: 'user' }),
    enabled,
    placeholderData: keepPreviousData,
  });

  return {
    postsData: postsData,
    isPostsLoading,
    isPostsFetching,
    refetchPosts,
  };
};
