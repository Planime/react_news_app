import React from "react"
import { render, screen } from '@testing-library/react';
import Filters from './Filters';
import FilterContext from '../../Context/FilterContext';

const formData = {
    selectedEndpoint: 'top-headlines',
    q: '',
    from: '',
    to: '',
    language: 'en',
    country: "us",
    category: "health",
    sortBy: "relevancy"
};

 describe ('Filters testing', () => {

    it('Filter testing', () => {
        render(
            <FilterContext.Provider
                value={{
                    formData,
                    }}>

                <Filters />
            </FilterContext.Provider>
        );
        expect(screen.getByRole("button", {name: /search/i})).toBeInTheDocument();
    });
 });





