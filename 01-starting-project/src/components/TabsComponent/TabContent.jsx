import { EXAMPLES } from '../../config/data';


const TabContent = function ({ data }) {
    // console.log(EXAMPLES[(data.toLowerCase())]);
    const { title, description, code } = EXAMPLES[(data.toLowerCase())];
    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </>
    );
};

export default TabContent;