import {Button, Container, Form, Image, ListGroup, ListGroupItem, Table} from "react-bootstrap";
import {useState} from "react";
import './App.css';

export default function SBB() {

    const [toStation, setToStation] = useState('')
    const [fromStation, setFromStation] = useState('')
    const [connections, setConnections] = useState([])

    function searchConnection() {
        fetch('http://transport.opendata.ch/v1/connections?from=' + fromStation + '&to=' + toStation)
            .then(response => response.json())
            .then(data => {
                setConnections(data.connections)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <Form>
            <h1>Zugverbindung suchen</h1>
            <br/>
            <h3>Abfahrtsort: </h3>
            <input size={45} type="text" value={fromStation} onChange={e => setFromStation(e.target.value)}/>
            <br/>
            <h3>Zielort: </h3>
            <input size={45} type="text" value={toStation} onChange={e => setToStation(e.target.value)}/>
            <br/>
            <br/>
            <Button onClick={searchConnection}>suche</Button>
            <br/>
            <br/>

            <Container>
            <ul>
                {connections.map((con, index) =>
                    <ListGroup>
                        <ListGroupItem key={index}>
                            <h5>Abfahrtsgleis:</h5> {con.to.platform}
                            <h5>Abfahrtszeit:</h5> {formatTime(new Date(con.from.departure))}
                            <h5>Ankunftszeit:</h5> {formatTime(new Date(con.to.arrival))}
                        </ListGroupItem>
                        <br/>
                    </ListGroup>
                )}
            </ul>
            </Container>
        </Form>

    );
}

function formatTime(date) {
    if (date.getMinutes() <= 10) {
        return date.getHours() + ":0" + date.getMinutes();
    } else {
        return date.getHours() + ":" + date.getMinutes();
    }
}


