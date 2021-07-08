import './App.css';
import {useState} from 'react';
import {Dropdown, Form} from "react-bootstrap";
import {useParams, useRouteMatch} from "react-router";

export default function ZweiAbhaengigeDropDowns() {
    let teams = [{name: "Team React", id: "teamReact"}, {name: "Team Angular", id: "teamAngular"}, {name: "Team Spring", id: "teamSpring"}]
    let teamsMembers = {
        teamReact: ["Dölf Designer", "Serge Sequencer", "Peter Prüfer", "Katrin"],
        teamAngular: ["Michale Marker", "Claudia Coder", "Teo Tester", "Florian"],
        teamSpring: ["Samuel Scripter", "Dorotea Dokumenter", "Rolf Riisser"]
    }


    const [selectedTeam, setSelectedTeam] = useState('teamReact')

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Bitte eine Auswahl treffen
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {teams.map((team, index) => <Dropdown.Item
                        onClick={() => setSelectedTeam(team.id)} key={index}>{team.name}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
            <br/>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Bitte eine Auswahl treffen
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {console.log(selectedTeam)}
                    {teamsMembers[selectedTeam].map((team, index) =>
                        <Dropdown.Item key={index}>{team}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        </div>

    );
}
