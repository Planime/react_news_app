import './App.css';
import React, {useEffect, useState, useReducer, Suspense, lazy} from "react"
import Header from './Header/Header'
import Filters from './Filters/Filters'
import Footer from './Footer/Footer'
import reducer from './reducer'
import useFetch from './useFetch/useFetch'
import FilterContext from '../Context/FilterContext'


const NewsList = lazy(() => import('./NewsList/NewsList'));
const corsAnywhere = "https://cors-bypass-tool.herokuapp.com/";

const headLinesURL = `${corsAnywhere}https://newsapi.org/v2/top-headlines?country=us&apiKey=0ec2062ccddc4214aac99c27c8ee6d0a`;

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
    const {response} = useFetch(headLinesURL);


    useEffect(() => {
        if (response) {
            setNewsList(response.articles)
        }
    }, [response]);

    return (
        <div className="App">
            <Header/>
            <FilterContext.Provider
                value={{
                    formData,
                    dispatch,
                    setNewsList}}>

                    <Filters />
                    </FilterContext.Provider>
            <Suspense fallback={<h1>LOADING...</h1>}>
                <NewsList
                    newsList={newsList}/>
            </Suspense>
            <Footer/>
        </div>
    );
}

export default App;
