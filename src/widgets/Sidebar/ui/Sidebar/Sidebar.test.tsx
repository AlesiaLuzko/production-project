import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from '../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
	test('Test render', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Test toogle', () => {
		renderWithTranslation(<Sidebar />);
		const toogleBtn = screen.getByTestId('sidebar-toogle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toogleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});
