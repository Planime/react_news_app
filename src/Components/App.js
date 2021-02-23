import './App.css';
import React, {useEffect, useState, useReducer} from "react"
import Header from './Header/Header'
import Filters from './Filters/Filters'
import NewsList from './NewsList/NewsList'
import Footer from './Footer/Footer'

const headLinesURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ec2062ccddc4214aac99c27c8ee6d0a";

function App() {

    const [newsList, setNewsList] = useState([]);
    const [selectedEndpoint, setSelectedEndpoint] = useState("top-headlines");
    const [selectCountry, setSelectCountry] = useState("us");
    const [selectCategory, setSelectCategory] = useState("health");
    const [selectLanguage, setSelectLanguage] = useState("en");
    const [selectSortBy, setSelectSortBy] = useState("relevancy");
    const [search, setSearch] = useState("");
    const [selectDateFrom, setSelectDateFrom] = useState("2021-02-02");
    const [selectDateTo, setSelectDateTo] = useState(new Date());



    useEffect(() => {
        fetch(headLinesURL)
            .then(res => res.json())
            .then(res => setNewsList(res.articles))
    }, []);

    return (
        <div className="App">
            <Header/>
            <Filters
                selectedEndpoint={selectedEndpoint}
                setSelectedEndpoint={setSelectedEndpoint}
                setSelectCountry={setSelectCountry}
                selectCountry={selectCountry}
                setSelectCategory={setSelectCategory}
                selectCategory={selectCategory}
                setSelectLanguage={setSelectLanguage}
                selectLanguage={selectLanguage}
                selectSortBy={selectSortBy}
                setSelectSortBy={setSelectSortBy}
                setNewsList={setNewsList}
                newsList={newsList}
                search={search}
                setSearch={setSearch}
                setSelectDateFrom={setSelectDateFrom}
                selectDateFrom={selectDateFrom}
                selectDateTo={selectDateTo}
                setSelectDateTo={setSelectDateTo}
            />
            <NewsList
                newsList={newsList}/>
            <Footer/>
        </div>
    );
}

export default App;
