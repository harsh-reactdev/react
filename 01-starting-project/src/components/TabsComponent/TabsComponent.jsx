
import { BUTTON_LABELS as btnLabels } from '../../config/data';

function TabButton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

function TabComponent({ onSelect }) {
    const tabButtons = btnLabels.map((label) => <TabButton onSelect={onSelect}>{label}</TabButton>);
    return (<>
        {tabButtons}
    </>);
}

export default TabComponent;