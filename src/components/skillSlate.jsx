import html from "../assets/html-1.svg";
import css from "../assets/css-3.svg";
import js from "../assets/javascript-1.svg";
import react from "../assets/react-2.svg";
export default function SkillSlate() {
    return (
        <div className="slateBg">
            <div className="skillLogo">
                <img src={html} alt="" />
            </div>
            <div className="skillLogo">
                <img src={css} alt="" />
            </div>
            <div className="skillLogo">
                <img src={js} alt="" />
            </div>
            <div className="skillLogo">
                <img src={react} alt="" />
            </div>
        </div>
    );
}
