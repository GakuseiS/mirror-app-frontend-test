import { api } from '../baseApi';
import { TSettingsResult } from './settings.types';

export const getSettings = (): Promise<TSettingsResult> => {
  return api.get('settings').json();
};
