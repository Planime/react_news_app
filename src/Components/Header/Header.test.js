import { render, screen } from '@testing-library/react';
import Header from './Header';

describe ('Header testing', () => {

    it('Header logo test', () => {
        render(<Header />);
        expect(screen.getByRole('img', {src: /[^\^]*/i})).toBeInTheDocument();
    });
});





