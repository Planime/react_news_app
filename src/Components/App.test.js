import { render, screen } from '@testing-library/react';
import App from './App';

describe ('App testing', () => {

    it('renders learn react link', () => {
        render(<App />);
        const linkElement = screen.getByText(/version/i);
        expect(linkElement).toBeInTheDocument();
    });


});





