import {Button, Form, Image} from "react-bootstrap";
import {useState} from "react";
import './App.css';

export default function BootstrapBsp() {

    const [deckID, setDeckID] = useState('')
    const [image, setImage] = useState('')
    const [state, setState] = useState(true)

    const [cards, setCards] = useState([]);
    const [heart, setHeart] = useState([]);
    const [kreuz, setKreuz] = useState([]);
    const [pik, setPik] = useState([]);
    const [karo, setKaro] = useState([]);


    function resetCards() {
        setCards([])
        setImage('')
    }

    function newDeck() {
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle')
            .then(response => response.json())
            .then(data => {
                setDeckID(data.deck_id)
                resetCards()
                setState(false)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function drawCard() {
        fetch('https://deckofcardsapi.com/api/deck/' + deckID + '/draw/?count=1')
            .then(response => response.json())
            .then(data => {
                setImage(data.cards[0].image)
                setCards([...cards, data.cards[0]])
                sort()
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function sort() {
        if (cards[0].suit == "HEARTS") {
            setHeart([...heart, cards[0].image])
        } else if (cards[0].suit == "ACE") {
            setKreuz([...kreuz, cards[0].image])
        } else if (cards[0].suit == "SPADES") {
            setPik([...pik, cards[0].image])
        } else {
            setKaro([...karo, cards[0].image])
        }
    }


    return (
        <Form>
            <h1>Deck of Cards</h1>
            <br/>
            <h5>My Card Deck ID is: {deckID}</h5>
            <br/>
            <Image src={image}></Image>
            <br/>
            <br/>
            <Button onClick={() => newDeck()}>new Deck</Button>
            <Button disabled={state} onClick={() => drawCard()}>Draw a Card</Button>
            <br/>
            {karo.map((karo) => <Image src={karo[0].image}></Image>)}
            <br/>
            {kreuz.map((kreuz) => <Image src={kreuz[0].image}></Image>)}
            <br/>
            {pik.map((pik) => <Image src={pik[0].image}></Image>)}
            <br/>
            {heart.map((heart) => <Image src={heart[0].image}></Image>)}

        </Form>

    );
}
