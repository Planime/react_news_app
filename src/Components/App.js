import './App.css';
import React, {useEffect, useState, useReducer, useMemo} from "react"
import Header from './Header/Header'
import Filters from './Filters/Filters'
import NewsList from './NewsList/NewsList'
import Footer from './Footer/Footer'
import reducer from './reducer'

const headLinesURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=0ec2062ccddc4214aac99c27c8ee6d0a";

const data = {
    selectedEndpoint: 'top-headlines',
    q: '',
    from: '',
    to: '',
    language: 'en',
    country: "us",
    category: "health",
    sortBy: "relevancy"
};


function App() {
    const [formData, dispatch] = useReducer(reducer, data);
    const [newsList, setNewsList] = useState([]);



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
