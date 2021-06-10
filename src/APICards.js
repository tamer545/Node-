import {Button, Form, Image} from "react-bootstrap";
import {useState} from "react";
import './App.css';

export default function BootstrapBsp() {

    const [deckID, setDeckID] = useState('')
    const [image, setImage] = useState('')
    const [state, setState] = useState(true)

    const [hearts, setHeart] = useState([]);
    const [diamonds, setDiamond] = useState([]);
    const [spades, setSpade] = useState([]);
    const [clubs, setClubs] = useState([]);

    let values = ['ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING']


    function resetCards() {
        setImage('')
        setHeart([])
        setDiamond([])
        setSpade([])
        setClubs([])
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
            setSpade([...spades, data.cards[0].image])
            console.log("spade")
        } else if (data.cards[0].suit == "CLUBS") {
            setClubs([...clubs, data.cards[0].image])
            console.log("clubs")
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
                <br/>
                {clubs.sort()}
                {clubs.map((club) => <Image src={club} style={{width: '100px'}}></Image>)}
                <br/>
                {diamonds.sort()}
                {diamonds.map((diamond) => <Image src={diamond} style={{width: '100px'}}></Image>)}
                <br/>
                {spades.sort()}
                {spades.map((spade) => <Image src={spade} style={{width: '100px'}}></Image>)}
                <br/>
                {hearts.sort()}
                {hearts.map((heart) => <Image src={heart} style={{width: '100px'}}></Image>)}

            </Form>

        );
    }

}
