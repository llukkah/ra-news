import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function News() {
    const [allNews, setallNews] = useState([]);

    useEffect (( => {
        const apiKey = "4084532960514a0681b51edb91b09c6d";
        const newsURL = "https://newsapi.org/v2/top-headlines";
        const fetchData = async() => {
        const result = await axios(`${newsURL}?country=us&apiKey=${apiKey}`);

        }
    }))


















}