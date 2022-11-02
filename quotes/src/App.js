import './App.css';
import axios from 'axios';
import {  React, useEffect, useState } from "react";



function App(){
    const handleClick = () => {
        fetchQuotes();
    }
    const [quotes, setQuotes] = useState('');
    
    const fetchQuotes = () => {
        axios.get('https://api.quotable.io/random')
        .then((response) => {
            const { content } = response.data;
            setQuotes(content);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchQuotes();
    }
    , [ ]);

    return (                    
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{quotes}</h1>
                <button className='button' onClick={handleClick}>
                    <span>
                        Give Me Advice!
                    </span>
                </button>
            </div>
        </div>
    )


}

export default App;