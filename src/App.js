import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";

const App = () => {
    const [character, setCharacters] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.dev/api/people').then(r => {
            setCharacters(r.data);
        })
    }, []);

    return (
        <div className="App">
            <h1 className="Header">
                Characters
            </h1>
            <Character characters={character}/>
        </div>
    );
}

export default App;