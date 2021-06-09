import './App.css';
import {useState} from 'react';

export default function Listen() {
    const data = [
        { title: 'red', red: 255, green: 0, blue: 0, html: '#FF0000'},
        { title: 'green', red: 0, green: 255, blue: 0 , html: '#00f700'},
        { title: 'blue', red: 0, green: 0, blue: 255 , html: '#000080'}
    ]
    const [colors, setColors] = useState(data);
    const [newColor, setNewColor] = useState('')

    function addColor(){
        setColors([...colors, newColor])

    }

    return (
        <div>
            <h1>colors</h1>
            <ul>
                {colors.map((color, index) => <li style={{color: color.html}} key={index}>{color.title}</li>)}
            </ul>
            <input value={newColor} onChange={e => setNewColor(e.target.value)}/>
            <button onClick={addColor}>add color</button>
        </div>

    );
}
