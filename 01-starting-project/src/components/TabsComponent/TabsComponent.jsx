
import { BUTTON_LABELS as btnLabels } from '../../config/data';

function TabButton({ children, onSelect }) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

function TabComponent(props) {
    const handleClick = function (e) {
        console.log(e.target.textContent);
    };

    const tabButtons = btnLabels.map((label) => <TabButton onSelect={handleClick}>{label}</TabButton>);
    return (<>
        {tabButtons}
    </>);
}

export default TabComponent;