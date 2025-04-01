import { FC } from 'react';
import { Button } from '../../ui/button';
import { TextField } from '../../ui/textField';
import { Spinner } from '../../ui/spinner';
import { LAYOUT_TYPES, NAV_TYPES, TEMPLATE_TYPES } from './settingsPanel.const';
import { useSettings } from '../../hooks/useSettings';
import styles from './settingsPanel.module.scss';

export const SettingsPanel: FC = () => {
  const { settings, isSettingsReady, layout, updateSettings, layoutCols, layoutRows } = useSettings();

  if (!settings || !layout || !isSettingsReady) {
    return (
      <div className={styles.panel}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      <Button variant='secondary' size='sm' onClick={updateSettings}>
        Обновить
      </Button>
      <div className={styles.fieldset}>
        <TextField label='Шаблон (макет)'>{LAYOUT_TYPES[layout]}</TextField>
        <TextField label='Карточка'>{TEMPLATE_TYPES[settings.template]}</TextField>
        <TextField label='Навигация'>{NAV_TYPES[settings.navigation]}</TextField>
        <TextField label='Колонок'>{layoutCols}</TextField>
        <TextField label='Рядов'>{layoutRows}</TextField>
      </div>
    </div>
  );
};
