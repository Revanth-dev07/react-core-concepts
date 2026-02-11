export default function TabButton({ children, onSelect, onActive }) {
    return (
        <li key={children}>
            <button className={onActive ? "active" : undefined} onClick={() => onSelect()}>
                {children}
            </button>
        </li>
    );
}