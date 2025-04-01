export const formatDateWithRelativeDays = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid date';

  const now = new Date();
  const timeDiff = now.getTime() - date.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff >= 0 && daysDiff <= 7) {
    let suffix;
    if (daysDiff === 0) suffix = 'сегодня';
    else if (daysDiff === 1) suffix = 'день назад';
    else if (daysDiff < 5) suffix = 'дня назад';
    else suffix = 'дней назад';
    return daysDiff === 0 ? suffix : `${daysDiff} ${suffix}`;
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
};
