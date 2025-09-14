import { useState } from 'react';
import { TabButton, TabContent, Section, TabsComponent } from '../../components';
import { BUTTON_LABELS as btnLabels } from '../../config/data';

const Examples = function () {
    const [tabContent, setTabContent] = useState('');

    const handleClick = function (e) {
        setTabContent(e.target.textContent);

    };

    const getTabButtons = function () {
        return btnLabels.map((label, ind) =>
            <TabButton key={ind} isSelected={tabContent === label} onClick={handleClick}>{label}</TabButton>);
    };
    const tabBtns = getTabButtons();

    return (
        <Section title="Examples" id="examples">
            {/* <h2>Examples</h2> */}
            {/* <menu> */}
            {/* <TabComponent onSelect={handleClick} /> */}
            {/* <TabButton isSelected={tabContent === 'Components'} onSelect={handleClick}>Components</TabButton>
                <TabButton isSelected={tabContent === 'JSX'} onSelect={handleClick}>JSX</TabButton>
                <TabButton isSelected={tabContent === 'Props'} onSelect={handleClick}>Props</TabButton>
                <TabButton isSelected={tabContent === 'State'} onSelect={handleClick}>State</TabButton> */}
            {/* {getTabButtons()} */}
            {/* </menu> */}
            {/* {tabContent ? */}
            {/* // <div id="tab-content"> */}
            {/* <TabContent data={tabContent} /> */}
            {/* </div> */}
            {/* // : <p>Please Select a topic.</p> */}
            {/* // } */}

            <TabsComponent
                tabButtons={tabBtns}
                ContainerElement="menu" //react identifies and looks for a built in component called menu
            // and if we specify a custom component, react understands we are passing in a custom component and renders it.
            >
                {tabContent ?
                    <div id="tab-content">
                        <TabContent data={tabContent} />
                    </div>
                    : <p>Please Select a topic.</p>
                }
            </TabsComponent>
        </Section>
    );
};

export default Examples;