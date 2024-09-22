import { describe, it, expect, vi } from 'vitest';
import dayjs from 'dayjs';
import CalendarComponent from '../components/calendar';
import { render, screen, fireEvent, prettyDOM, within } from '@testing-library/react';

const getCurrentMonthName = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  
  return months[currentMonthIndex];
}

const currentYear = new Date().getFullYear();

describe('Calendar Component', () => {
  it('should display current month and year', () => {
    render(<CalendarComponent />);
    expect(screen.getByText(`${getCurrentMonthName()} ${currentYear}`)).toBeInTheDocument();
  });

  it('should open new tab with Google Calendar URL on date click', () => {
    window.open = vi.fn();
    render(<CalendarComponent />);

    const calendarGrid = screen.getByRole('grid');
    const dateButtons = within(calendarGrid).getAllByRole('gridcell')
      .filter(cell => cell.tagName.toLowerCase() === 'button');

    const today = dayjs();
    const todayButton = dateButtons.find(button => 
      button.textContent === today.format('D') && button.getAttribute('aria-current') === 'date'
    );

    expect(todayButton).toBeTruthy();

    if (todayButton) {
      fireEvent.click(todayButton);

      const expectedDate = today.format('YYYY/MM/DD');
      expect(window.open).toHaveBeenCalledWith(
        `https://calendar.google.com/calendar/u/0/r/week/${expectedDate}?pli=1`,
        '_blank'
      );
    } else {
      throw new Error('Today button not found');
    }
  });
});
