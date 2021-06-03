import './App.css';
import {useState} from 'react';

export default function Listen() {
    const [colors, setColors] = useState(['red', 'green'])
    const [newColor, setNewColor] = useState('')

    function addColor(){
        setColors([...colors, newColor])
    }

    return (
        <div>
            <h1>colors</h1>
            <ul>
                {colors.map((color, index) => <li key={index}>{color}</li>)}
            </ul>
            <input value={newColor} onChange={e => setNewColor(e.target.value)}/>
            <button onClick={addColor}>add color</button>
        </div>

    );
}
