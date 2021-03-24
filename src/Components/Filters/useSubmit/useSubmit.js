import {createConfigEverything, createConfigTopHeadlines, createConfigUrl} from "./index"


function useSubmit(data, setNewsList) {


    const configTopHeadlines = createConfigTopHeadlines(data);
    const configEverything = createConfigEverything(data);

    const apiKey = "apiKey=0ec2062ccddc4214aac99c27c8ee6d0a";

    const corsAnywhere = "https://cors-bypass-tool.herokuapp.com/";



    return (e) => {
        e.preventDefault();

        if (data.selectedEndpoint === "everything") {
            fetch(`https://newsapi.org/v2/everything?${createConfigUrl(configEverything)}&${apiKey}`)
                .then(res => res.json())
                .then(res => setNewsList(res.articles))

        }
        else {

            let urlTopHeadlines = `${corsAnywhere}https://newsapi.org/v2/top-headlines?${createConfigUrl(configTopHeadlines)}&${apiKey}`;

            fetch(urlTopHeadlines)
                .then(res => res.json())
                .then(res => setNewsList(res.articles))
        }

    }

}

export default useSubmit