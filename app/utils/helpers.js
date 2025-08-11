import { text } from './data';

export function getCurrentBusyStatus(isBusy = text.contact.isBusy) {
    // If isBusy is not null/undefined, use it as override
    if (isBusy !== null && isBusy !== undefined) {
        return isBusy;
    }
    // Otherwise, use time-based logic for Cairo
    const now = new Date();
    // Cairo is UTC+2
    const utcHour = now.getUTCHours();
    const utcDay = now.getUTCDay(); // 0=Sunday, 6=Saturday
    const cairoHour = (utcHour + 2) % 24;
    // Workdays: Sunday (0) to Friday (5), Work hours: 10-18
    const isWorkDay = utcDay >= 0 && utcDay <= 5;
    const isWorkHour = cairoHour >= 10 && cairoHour < 18;
    return isWorkDay && isWorkHour;
}