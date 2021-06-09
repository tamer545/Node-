import './App.css';
import {useState} from 'react';
import {Form} from "react-bootstrap";

export default function BMI() {
    const [bmi, setBmi] = useState(0)


    const [kgValue, setKgValue] = useState(0)
    const [cmValue, setCmValue] = useState(0)

    function calculateBMI(e) {
        e.preventDefault();
        let cm = cmValue
        let kg = kgValue

        if (!isNaN(cm) && !isNaN(kg)) {
            setBmi(parseInt(kg) / parseInt(cm) / parseInt(cm) * 10000)
        }
    }

    return (
        <div>
            BMI
            <br/>
            {bmi}
            <br/>
            <Form>
                <Form.Group>
                    <Form.Label>Ihr Gewicht (kg) : </Form.Label>
                    <Form.Control type="text" value={kgValue} onChange={e => setKgValue(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ihre Grösse (cm) : </Form.Label>
                    <Form.Control type="text" value={cmValue} onChange={e => setCmValue(e.target.value)}/>
                </Form.Group>
                <br/>
                <button onClick={calculateBMI}>Senden</button>
            </Form>
        </div>

    );
}
