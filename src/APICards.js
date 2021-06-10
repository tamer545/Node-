import {Button, Form, Image} from "react-bootstrap";
import {useState} from "react";
import './App.css';

export default function BootstrapBsp() {

    const [deckID, setDeckID] = useState('')
    const [image, setImage] = useState('')
    const [state, setState] = useState(true)

    const [hearts, setHeart] = useState([]);
    const [diamonds, setDiamond] = useState([]);
    const [spades, setPik] = useState([]);
    const [clubs, setClubs] = useState([]);


    function resetCards() {
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
                sort(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function sort(data) {
        console.log("sort")
        if (data.cards[0].suit == "HEARTS") {
            setHeart([...hearts, data.cards[0].image])
            console.log("heart")
        } else if (data.cards[0].suit == "DIAMONDS") {
            setDiamond([...diamonds, data.cards[0].image])
            console.log("diamond")
        } else if (data.cards[0].suit == "SPADES") {
            setPik([...spades, data.cards[0].image])
            console.log("spade")
        } else if (data.cards[0].suit == "CLUBS"){
            setClubs([...clubs, data.cards[0].image])
            console.log("clubs")
            console.log(clubs)
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
            {clubs.map((club) => <Image src={club}></Image>)}
            <br/>
            {diamonds.map((diamond) => <Image src={diamond}></Image>)}
            <br/>
            {spades.map((spade) => <Image src={spade}></Image>)}
            <br/>
            {hearts.map((heart) => <Image src={heart}></Image>)}

        </Form>

    );
}
