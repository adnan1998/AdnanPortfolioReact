import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import CodeScreen from "../assets/codeScreen.json";
import CodeLogo from "../assets/codingLogo.json";
import { useEffect, useState } from "react";
export default function Header() {
    const [scrollVal, setScrollVal] = useState(0);
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#logo"),
            animationData: CodeLogo,
        });
    }, []);

    const handleScroll = (e) => {
        setScrollVal(e.target.scrollTop);
    };
    console.log("scroll :", scrollVal);

    return (
        <header className="header" onScroll={handleScroll}>
            <div className="logo">
                <div id="logo" style={{ width: "70px", height: "70px" }}></div>
                <h1>Portfolio</h1>
            </div>
            <nav className="navbar">
                <a href="home">Home</a>
                <a href="home">Services</a>
                <a href="home">Skills</a>
                <a href="home">Portfolio</a>
                <a href="home">Contact</a>
            </nav>
            <div className="contact">
                <button className="btn contactNow">Contact Now</button>
            </div>
        </header>
    );
}
