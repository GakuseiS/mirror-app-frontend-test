import { useQuery } from '@tanstack/react-query';
import { TSettingsResult } from './settings.types';
import { getSettings } from './settings.requests';

export const SETTINGS_QUERY_KEY = 'settings';

export const useSettingsQuery = (): {
  settingsData?: TSettingsResult;
  isSettingsLoading: boolean;
  isFetchingSettings: boolean;
  refetchSettings: VoidFunction;
} => {
  const queryKey = [SETTINGS_QUERY_KEY];
  const {
    data: settingsData,
    isLoading: isSettingsLoading,
    refetch: refetchSettings,
    isFetching: isFetchingSettings,
  } = useQuery({
    queryKey,
    queryFn: getSettings,
  });

  return {
    settingsData,
    refetchSettings,
    isSettingsLoading,
    isFetchingSettings,
  };
};
