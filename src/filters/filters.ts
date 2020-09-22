export function minutes(duration: number): string {
  if (duration && duration > 0) {
    return duration.toString().concat(' min');
  }
  return '';
}

export function year(date: string): string {
  if (date && date.length > 3) {
    return date.substring(0, 4);
  }
  return '';
}
