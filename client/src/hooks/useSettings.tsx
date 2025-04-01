import { useSettingsQuery } from '../services/settings/settings.queries';

export const useSettings = () => {
  const { settingsData, isFetchingSettings, refetchSettings } = useSettingsQuery();
  const layout = settingsData?.layout.current;
  const layoutCols = settingsData && layout ? settingsData?.layout.params[layout].columns : 0;
  const layoutRows = settingsData && layout ? settingsData?.layout.params[layout].rows : 0;

  return {
    settings: settingsData,
    layout,
    layoutCols,
    layoutRows,
    isSettingsReady: !isFetchingSettings,
    updateSettings: refetchSettings,
  };
};
