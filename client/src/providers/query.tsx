import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

type QueryProviderProps = {
  children: ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1, refetchOnWindowFocus: false, refetchOnReconnect: false } },
});

export function QueryProvider({ children }: QueryProviderProps): ReactNode {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
