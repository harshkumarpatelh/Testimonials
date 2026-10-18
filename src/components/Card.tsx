import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import './Card.css'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"


function Card(props: any) {
    let review = props.review

    const setIdxToRandom = props.setIdxToRandom
    const setIdxTo = props.setIdxTo

    function leftClickHandler() {
        console.log("left click")
        setIdxTo(false)
    }

    function rightClickHandler() {
        console.log("right click")
        setIdxTo(true)

    }


    function surpriseHandler() {
        console.log("surprise me")
        setIdxToRandom()

    }
    return <div className="card-container">
        <div className="img-container">
            {/* profile picture */}
            <img src={review.image} className="img"></img>
            <div className="background-circle"></div>
        </div>

        <div className="content-container">

            {/* heading */}
            <div className="name-container">
                <p className="name">{review.name}</p>
            </div>


            {/* subheading */}
            <div className="job-container">
                <p className="job">{review.job}</p>
            </div>

            {/* quote start icon */}
            <div className="left-quote-container">
                <FaQuoteLeft className="quote" />
            </div>

            {/* about */}
            <div className="review-container">
                <p>{review.text}</p>
            </div>

            {/* quote start icon */}
            <div className="right-quote-container">
                <FaQuoteRight className="quote" />
            </div>

            <div className="swap-btns">
                <div className="btn-left">
                    <button className="btn" onClick={leftClickHandler}>
                        <FiChevronLeft />
                    </button>
                </div>
                <div className="btn-right">
                    <button className="btn" onClick={rightClickHandler}>
                        <FiChevronRight />
                    </button>
                </div>
            </div>

            <div className="surprise-me"><button onClick={surpriseHandler}>Surprise me</button></div>
        </div>


    </div>
}

export default Card