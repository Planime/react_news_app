import {useState, useEffect} from "react"

function useFetch(url, options = {}) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetch(url, options);
                res = await res.json();
                setResponse(res);
            }
            catch (e) {
                setError(e)
            }
        };

        fetchData()
    }, []);

    return {
        response,
        error
    }
}

export default useFetch