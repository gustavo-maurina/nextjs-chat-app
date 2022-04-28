export default function getHoursAndSeconds(date: Date): string {
  return `${date.getHours()}:${date.getMinutes()}`;
}
