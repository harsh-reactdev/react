function TabButton({ children, onSelect, isSelected }) {
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}

// function TabComponent({ onSelect }) {
//     const [active, setActive] = useState(false);

//     const handleClick = function () {
//         setActive(true);
//     };


//     // const tabButtons = btnLabels.map((label) => <TabButton isSelected={active ? 'active' : ''} onClick={handleClick} onSelect={onSelect}>{label}</TabButton>);
//     return (<>
//         {/* {tabButtons} */}
//         <TabButton isSelected={active ? 'active' : ''} onClick={handleClick} onSelect={onSelect}>Components</TabButton>
//         <TabButton isSelected={active ? 'active' : ''} onClick={handleClick} onSelect={onSelect}>JSX</TabButton>
//         <TabButton isSelected={active ? 'active' : ''} onClick={handleClick} onSelect={onSelect}>Props</TabButton>
//         <TabButton isSelected={active ? 'active' : ''} onClick={handleClick} onSelect={onSelect}>State</TabButton>
//     </>);
// }

export default TabButton;