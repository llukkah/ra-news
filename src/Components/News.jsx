import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function News() {
    const [allNews, setallNews] = useState([]);

    useEffect (( => {
        const apiKey = "4084532960514a0681b51edb91b09c6d";
        const newsURL = "https://newsapi.org/v2/top-headlines";
        const fetchData = async() => {
        const result = await axios(`${newsURL}?country=us&apiKey=${apiKey}`);
        //as discussed when time ran out next steps:
        //-populate the setallNews variable with the results(result.data.articles) from the axios call.
        }
    }))

//afterwards, in the return  section to display our results, 
// we will map through the allNews array
// then set the articles in each article card with the info from the API
// {allNews.map((news) => (
//     <div>
//         <a href={news.url}><{news.title}</a>
//         <p>{news.description}</p>
//         <p>{news.source.name}</p>
//     </div>
// ))}
}