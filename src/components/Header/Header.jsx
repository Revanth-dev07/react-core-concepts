import icon from "../../assets/react-core-concepts.png";
import './Header.css';

export default function Header() {
    const descriptions = ["fundamental", "Crucial", "Core"];
    const description = descriptions[Math.floor(Math.random() * 3)];
    return (
        <header>
            <img src={icon} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}