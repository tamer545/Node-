import './App.css';
import {useState} from 'react';

export default function RadioButton() {

    const [radioButtonValue, setRadioButtonValue] = useState('')
    const [radioButtonResult, setRadioButtonResult] = useState('')

    const [checkBoxValue, setCheckBoxValue] = useState('')

    const [checkbox1] = useState(false);
    const [checkbox2] = useState(false);
    const [checkbox3] = useState(false);

    function print(e) {
        setRadioButtonResult(radioButtonValue)
        if (e.target.name === "one"){
            setCheckBoxValue("C" +
                "heckbox 1 angeklickt")
        }
    }

    return (
        <div>
            <br/>
            <input onChange={e => setRadioButtonValue(e.target.value)} type="radio" name="myOptions" value="option1"/>
            <input onChange={e => setRadioButtonValue(e.target.value)} type="radio" name="myOptions" value="option2"/>
            <input onChange={e => setRadioButtonValue(e.target.value)} type="radio" name="myOptions" value="option3"/>
            <br/>
            <input type="checkbox" name="one" checked={checkbox1}  />
            <input type="checkbox" name="two" checked={checkbox2}  />
            <input type="checkbox" name="three" checked={checkbox3}  />
            <br/>
            <button onClick={print}>Submit</button>
            <br/>
            <br/>
            {radioButtonResult}
            <br/>
            <br/>
            {checkBoxValue}
        </div>

    );
}
