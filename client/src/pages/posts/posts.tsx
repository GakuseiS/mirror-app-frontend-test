import { FC } from 'react';
import { SettingsPanel } from '../../modules/settingsPanel';
import { PostsContent } from '../../modules/postsContent/postsContent';
import styles from './posts.module.scss';

export const PostsPage: FC = () => {
  return (
    <div className={styles.page}>
      <SettingsPanel />
      <PostsContent />
    </div>
  );
};
