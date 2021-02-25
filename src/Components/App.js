import './App.css';
import React, {useEffect, useState, useReducer, useMemo} from "react"
import Header from './Header/Header'
import Filters from './Filters/Filters'
import NewsList from './NewsList/NewsList'
import Footer from './Footer/Footer'

const headLinesURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ec2062ccddc4214aac99c27c8ee6d0a";

const data = {
    selectedEndpoint: 'top-headlines',
    q: '',
    from: '',
    to: '',
    language: 'en',

};


function reducer(state, action) {
    switch (action.type) {
        case 'simpleInput':
            return {
                ...state,
                [action.payload]: action.value
            };
        case 'dateInput':
            return {
                ...state,
                [action.payload]: action.value
            }
    }

}


function App() {
    const [formData, dispatch] = useReducer(reducer, data);

    const [newsList, setNewsList] = useState([]);
    const [selectCountry, setSelectCountry] = useState("us");
    const [selectCategory, setSelectCategory] = useState("health");
    // const [selectLanguage, setSelectLanguage] = useState("en");
    const [selectSortBy, setSelectSortBy] = useState("relevancy");



    useEffect(() => {
        fetch(headLinesURL)
            .then(res => res.json())
            .then(res => setNewsList(res.articles))
    }, []);

    return (
        <div className="App">
            <Header/>
            <Filters
                formData={formData}
                dispatch={dispatch}
                setSelectCountry={setSelectCountry}
                selectCountry={selectCountry}
                setSelectCategory={setSelectCategory}
                selectCategory={selectCategory}
                // setSelectLanguage={setSelectLanguage}
                // selectLanguage={selectLanguage}
                selectSortBy={selectSortBy}
                setSelectSortBy={setSelectSortBy}
                setNewsList={setNewsList}
                newsList={newsList}
            />
            <NewsList
                newsList={newsList}/>
            <Footer/>
        </div>
    );
}

export default App;
