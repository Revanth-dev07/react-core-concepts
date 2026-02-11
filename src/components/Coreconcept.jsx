export default function Coreconcept({ title, description, image }) {
    return (
        <li key={title}>
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}