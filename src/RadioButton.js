import './App.css';
import {useState} from 'react';

export default function App() {

    const [value, setValue] = useState('')

    const [result, setResult] = useState('')

    function print() {
        setResult(value)
    }

    return (
        <div>
            <br/>
            <input onChange={e => setValue(e.target.value)} type="radio" name="myOptions" value="option1"/>
            <input onChange={e => setValue(e.target.value)} type="radio" name="myOptions" value="option2"/>
            <input onChange={e => setValue(e.target.value)} type="radio" name="myOptions" value="option3"/>
            <br/>
            <br/>
            <button onClick={print}>Submit</button>
            <br/>
            <br/>
            {result}
        </div>

    );
}
