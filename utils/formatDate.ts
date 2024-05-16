import { DateTime } from "luxon";

/** Format: Oct 15, 2022 */
export const formatDateToFull = (date: Date) => {
  return DateTime.fromISO(date.toString()).toLocaleString(DateTime.DATE_FULL);
};

/** Format: 2022-10-15 */
export const formatDateToISODate = (date: Date) => {
  return DateTime.fromISO(date.toString()).toFormat("yyyy-MM-dd");
};
