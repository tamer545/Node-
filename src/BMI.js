import './App.css';
import {useState} from 'react';
import {Form} from "react-bootstrap";
import {useParams, useRouteMatch} from "react-router";

export default function BMI() {
    const [bmi, setBmi] = useState(0)
    let {bmiId} = useParams()


    const [kgValue, setKgValue] = useState(0)
    const [cmValue, setCmValue] = useState(0)

    function calculateBMI(e) {
        e.preventDefault();
        let cm = cmValue
        let kg = kgValue

        if (!isNaN(cm) && !isNaN(kg)) {
            setBmi(parseInt(kg) / parseInt(cm) / parseInt(cm) * 10000)
        }

     /*   const match = useRouteMatch({path: "/bmi/bmiID", strict: true, sensitive: true})
        console.log("match:")
        console.log(match)
        if (match) {
            console.log("is exact: " + match.isExact)
            console.log("path: " + match.path)
            console.log("url     : " + match.url)
            console.log(match.params)
        }*/
    }
    return (
        <div>
            BMI
            <br/>
            {bmi + bmiId}
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
