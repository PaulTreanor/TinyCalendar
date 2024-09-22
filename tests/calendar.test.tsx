import { describe, it, expect } from 'vitest';
import CalendarComponent from '../components/calendar';
import { render, screen } from '@testing-library/react';

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
});
