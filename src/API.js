import {Button, Form} from "react-bootstrap";
import {useState} from "react";

export default function BootstrapBsp() {

    const [inputWord, setInputWord] = useState('')
    const [words, setWords] = useState([])

    function load() {
        fetch('https://api.datamuse.com/words?rel_rhy=' + inputWord)
            .then(response => response.json())
            .then(data => {
                setWords(data)
            });
    }

    return (
        <Form>
            <h1>Datamuse Rhymes</h1>
            <input size={45} type="text" value={inputWord} onChange={e => setInputWord(e.target.value)}/>
            <br/>
            <br/>
            <Button onClick={() => load()}>Suchen</Button>
            <ul>{ words.map((w) => <li>{w.word}</li>) }</ul>
        </Form>

    );
}
