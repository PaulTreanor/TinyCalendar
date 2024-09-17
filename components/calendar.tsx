import { useState } from 'react';
import Calendar from 'react-calendar';

export default function CalendarComponent() {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Calendar onChange={(value) => setDate(value as Date)} value={date} />
        </div>
    );
}