import './App.css';
import React, {useRef, useState} from "react";
import {Heart, HeartFill, Star, Stars} from "react-bootstrap-icons";

export default function LikeButton() {
    const [isChecked, setIsChecked] = useState(false)


    function Like() {
        if (isChecked == true) {
            return (
                <div><HeartFill/></div>
            )
        }
        return (
            <div><Heart/></div>
        )
    }

    function Rating() {
        return (
            <div><Star/><Star/><Star/><Star/><Star/></div>
            
        )
    }

    function changeValue() {
        if (isChecked == true) {
            setIsChecked(false)
        } else {
            setIsChecked(true)
        }
    }

    return (
        <div>
            <h3>Like</h3>
            <div onClick={() => changeValue()}>
                <Like checked={false}/>
            </div>

            <br/>
            <br/>

            <h3>Rating</h3>
            <Rating onChange={(v) => console.log(v)} checked={false}/>
        </div>
    );
}