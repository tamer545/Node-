import {Button, Container, Form, Image, ListGroup, ListGroupItem, Table} from "react-bootstrap";
import {useState} from "react";
import './App.css';
import bus from "./images/bus.png"
import zug from "./images/zug.png"

export default function Stationboard() {
    let [standort, setStandort] = useState([])
    let [verbindungen, setVerbindungen] = useState([])
    function formatTime(date) {
        if (date.getMinutes() <= 10) {
            return date.getHours() + ":0" + date.getMinutes();
        } else {
            return date.getHours() + ":" + date.getMinutes();
        }
    }
    const search = () => {
        console.log(standort)
        fetch('http://transport.opendata.ch/v1/stationboard?station='+standort+'&limit=20')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setVerbindungen(data.stationboard)
            })

    }

    return (
        <div>
            <Form>
                Standort:
                <br/>
                <input type="text"
                       value={ standort }
                       onChange={ e => setStandort (e.target.value) } />
                <br/>

                <Button onClick={ search }>suche</Button>

                <ul>{verbindungen.map((con, idx) =>
                    <ListGroup key={idx}>
                        <ListGroupItem>{con.category+con.number} | Zeit: {formatTime(new Date(con.stop.departure))} Nach: {con.to} | Gleis: {con.stop.platform}  </ListGroupItem>
                    </ListGroup>)
                }
                </ul>

            </Form>
        </div>
    );
}