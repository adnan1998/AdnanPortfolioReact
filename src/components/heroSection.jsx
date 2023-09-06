import { useEffect } from "react";
import coding1 from "../assets/coding1.json";
import coding2 from "../assets/coding2.json";
import Lottie from "lottie-web";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
    useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector("#code1"),
            animationData: coding1,
        });
        Lottie.loadAnimation({
            container: document.querySelector("#code2"),
            animationData: coding2,
        });
    }, []);

    return (
        <section className="heroSection">
            <div className="subHero introduction">
                <div className="introContainer">
                    <div className="devName">👋, My name is Adnan</div>
                    <div className="skillSet">
                        I'm a{" "}
                        <TypeAnimation
                            sequence={[
                                "Frontend Developer",
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Js Developer",
                                1000,
                                "Frontend Designer",
                                1000,
                                "ReactJs Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="devAddess">Based in Punjab, India.</div>
                    <div>
                        <button className="letsStart btn">Let's Start</button>
                    </div>
                </div>
            </div>
            <div className="subHero illustration">
                <div className="vectorBg"></div>
                <div className="illuCont">
                    <div className="illus1">
                        <div className="illus" id="code1"></div>
                    </div>
                    <div className="illus2">
                        <div className="illus" id="code2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
