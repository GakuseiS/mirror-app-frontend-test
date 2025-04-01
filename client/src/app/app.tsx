import 'normalize.css';
import './styles/style.scss';
import { PostsPage } from '../pages/posts';
import { QueryProvider } from '../providers/query';
import { ReactNode } from 'react';

function App(): ReactNode {
  return (
    <QueryProvider>
      <PostsPage />
    </QueryProvider>
  );
}

export default App;
