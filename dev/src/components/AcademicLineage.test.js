import { fireEvent, render, screen, within } from '@testing-library/react';
import AcademicLineage from './AcademicLineage';

// jsdom does not implement the native dialog lifecycle. Emulate its open/close
// events here; browsers provide modality, focus trapping, and Escape handling.
beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function showModal() {
    this.setAttribute('open', '');
  };
  HTMLDialogElement.prototype.close = function close() {
    if (!this.hasAttribute('open')) return;
    this.removeAttribute('open');
    this.dispatchEvent(new Event('close'));
  };
});

afterEach(() => {
  document.body.style.overflow = '';
});

test('opens the lineage, switches paths, and exposes evidence on demand', () => {
  render(<AcademicLineage />);
  fireEvent.click(screen.getByRole('button', { name: /Explore my academic lineage/ }));

  const dialog = screen.getByRole('dialog', { name: 'Academic lineage' });
  expect(document.body.style.overflow).toBe('hidden');
  expect(within(dialog).getByText('Isaac Newton', { selector: 'span' })).toBeVisible();
  expect(within(dialog).getByText(/Older connections/)).toBeInTheDocument();

  const prem = within(dialog).getByText('Premkumar Thomas Devanbu').closest('details');
  fireEvent.click(prem.querySelector('summary'));
  expect(prem).toHaveAttribute('open');
  expect(within(prem).getByText('Reported doctoral supervision')).toBeVisible();
  expect(within(prem).getByRole('link', { name: 'View genealogy record' })).toHaveAttribute('href', 'https://www.mathgenealogy.org/id.php?id=70228');

  fireEvent.change(screen.getByLabelText('Trace a path to'), { target: { value: '38586' } });
  expect(within(dialog).getByText('Leonhard Euler', { selector: 'span' })).toBeVisible();
  expect(within(dialog).queryByText('Isaac Newton', { selector: 'span' })).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Close academic lineage' }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe('');
});

test('restores scrolling after native dismissal and can reopen', () => {
  document.body.style.overflow = 'auto';
  render(<AcademicLineage />);
  const trigger = screen.getByRole('button', { name: /Explore my academic lineage/ });
  fireEvent.click(trigger);
  fireEvent(screen.getByRole('dialog'), new Event('close'));
  expect(document.body.style.overflow).toBe('auto');
  expect(trigger).toHaveFocus();
  fireEvent.click(trigger);
  expect(screen.getByRole('dialog')).toHaveAttribute('open');
  fireEvent.click(screen.getByRole('button', { name: 'Close academic lineage' }));
});
