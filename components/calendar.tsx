import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function CalendarComponent() {
    const handleDateChange = (value: dayjs.Dayjs | null) => {
        if (value) {
            const formattedDate = value.format('YYYY/MM/DD');
            const calendarUrl = `https://calendar.google.com/calendar/u/0/r/week/${formattedDate}?pli=1`;
            window.open(calendarUrl, '_blank');
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar 
                onChange={handleDateChange}
                views={['day']}
            />
        </LocalizationProvider>
    );
}