import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('should be in the document', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('should toggle class collapsed', () => {
    renderWithTranslation(<Sidebar />);
    const buttonToggle = screen.getByTestId('sidebar_button');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(buttonToggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
