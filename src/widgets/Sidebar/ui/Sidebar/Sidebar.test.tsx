import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('should be in the document', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should toggle class collapsed', () => {
    renderComponent(<Sidebar />);
    const buttonToggle = screen.getByTestId('sidebar_button');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(buttonToggle);
    expect(
      screen.getByTestId('sidebar').classList.contains('collapsed'),
    ).not.toBe(true);
  });
});
