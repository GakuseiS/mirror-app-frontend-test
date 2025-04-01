export type TSettingsResult = {
  layout: {
    current: 'grid' | 'masonry';
    params: {
      grid: {
        columns: number;
        rows: number;
      };
      masonry: {
        columns: number;
        rows: number;
      };
    };
  };
  template: 'classic' | 'hover';
  navigation: 'load-more' | 'pagination';
};
