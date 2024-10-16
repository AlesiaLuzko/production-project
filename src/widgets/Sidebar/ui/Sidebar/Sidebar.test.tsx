import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
	test('Test render', () => {
		componentRender(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Test toogle', () => {
		componentRender(<Sidebar />);
		const toogleBtn = screen.getByTestId('sidebar-toogle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toogleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
