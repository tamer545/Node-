import './App.css';
import {useState} from 'react';

export default function CounterTest() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="App">< h1>
            Counter:
            {counter}
        </h1>
            <button onClick={() => {
                setCounter(counter + 1);
                setCounter(counter + 1);
            }}> +
            </button>
        </div>
    );
}
