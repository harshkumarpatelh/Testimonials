import { useState } from "react";
import { reviews } from "../data"
import Card from "./Card"
import './Testimonials.css'

function Testimonials() {
    const [idx, setIdx] = useState(0)
    const len = reviews.length
    const review = reviews[idx];

    function setIdxTo(isRight: boolean = false) {
        if (isRight) {
            setIdx((lastIdx: number) => (lastIdx + 1) % len)
        }
        else {
            setIdx((lastIdx: number) => lastIdx === 0 ? len - 1 : (lastIdx - 1))
        }
    }

    function setIdxToRandom() {
        const randomIdx = Math.random() * (len);
        console.log("randomIdx", Math.floor(randomIdx))
        setIdx(Math.floor(randomIdx))
    }
    return <div className="testimonila-container">
        {/* {reviews.map((review) => <Card key={review.id} review={review} />)} */}
        <Card review={review}
            setIdxToRandom={setIdxToRandom}
            setIdxTo={setIdxTo}
        />
    </div>
}

export default Testimonials