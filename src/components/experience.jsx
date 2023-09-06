import { useEffect } from "react";
import Lottie from "lottie-web";
import coder from "../assets/coder.json";

export default function Experience() {
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector("#coderImg"),
            animationData: coder,
        });
    }, []);

    return (
        <div className="experince">
            <div className="codeIllu">
                <div id="coderImg"></div>
            </div>
            <div className="codeExp">
                <div className="expHead">
                    <strong>
                        I'm a Front-end Developer with over 1 years of
                        experience.
                    </strong>
                </div>
                <p className="expDetails">
                    I'm a Front-end Developer with over 1 years of experience.
                    I'm from Punjab. I code and create web elements for amazing
                    people around the world. I like work with new people. New
                    people new Experiences.
                </p>
                <div className="expProjects">
                    <strong className="totalProjects">10+ </strong>
                    <span>Projet Completed</span>
                </div>
                <div className="expBtns">
                    <button className="expContact contactNow btn">
                        Contact Me
                    </button>
                    <button className="expPort btn">Portfolio</button>
                </div>
            </div>
        </div>
    );
}
