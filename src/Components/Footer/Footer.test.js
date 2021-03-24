import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe ('Footer testing', () => {

    it('Footer test', () => {
        render(<Footer />);
        expect(screen.getByText(/Version/i)).toBeInTheDocument();
    });
});





