import Calendar from 'react-calendar';

export default function CalendarComponent() {

    const handleDateChange = (value: Date | Date[]) => {
        const formattedDate = (value as Date).toISOString().split('T')[0].replace(/-/g, '/');
        const calendarUrl = `https://calendar.google.com/calendar/u/0/r/week/${formattedDate}?pli=1`;
        window.open(calendarUrl, '_blank');
    };

    return (
        <div>
            <Calendar 
                onChange={handleDateChange}
                minDetail="year"
            />
        </div>
    );
}