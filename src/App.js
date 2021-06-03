import './App.css';
import {useState} from 'react';

export default function App() {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [lastValue, setLastValue] = useState('')

    const [result, setResult] = useState('')
    const [selectValue, setSelectValue] = useState('')

    function print() {
        if (selectValue === "showEmail") {
            setLastValue(name + "@gmail.com")
        } else if (selectValue === "showNickname") {
            setLastValue("nick")
        } else {
            setLastValue("")
        }

        setResult(name + " / " + message + " / " + lastValue)
    }

    return (
        <div>
            Name :
            <br/>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <br/>
            Message :
            <br/>
            <textarea value={message} onChange={e => setMessage(e.target.value)}/>
            <br/>
            <select onChange={e => setSelectValue(e.target.value)}>
                <option value="showEmail">E-Mail anzeigen</option>
                <option value="showNickname">Nickname anzeigen</option>
                <option value="showNothing">Keine Anzeige</option>
            </select>
            <br/>
            <br/>
            <button onClick={print}>Submit</button>
            <br/>
            {result}
        </div>

    );
}
