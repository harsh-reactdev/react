import { useState } from 'react';
import { TabButton, TabContent } from '../../components';
import { BUTTON_LABELS as btnLabels } from '../../config/data';

const Examples = function () {
    const [tabContent, setTabContent] = useState('');

    const getTabComponent = function () {
        return btnLabels.map((label, ind) =>
            <TabButton key={ind} isSelected={tabContent === label} onSelect={handleClick}>{label}</TabButton>);
    };

    const handleClick = function (e) {
        setTabContent(e.target.textContent);

    };
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {/* <TabComponent onSelect={handleClick} /> */}
                {/* <TabButton isSelected={tabContent === 'Components'} onSelect={handleClick}>Components</TabButton>
                <TabButton isSelected={tabContent === 'JSX'} onSelect={handleClick}>JSX</TabButton>
                <TabButton isSelected={tabContent === 'Props'} onSelect={handleClick}>Props</TabButton>
                <TabButton isSelected={tabContent === 'State'} onSelect={handleClick}>State</TabButton> */}
                {getTabComponent()}
            </menu>
            {tabContent ?
                <div id="tab-content">
                    <TabContent data={tabContent} />
                </div>
                : <p>Please Select a topic.</p>
            }
        </section>
    );
};

export default Examples;