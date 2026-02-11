import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';

export default function TabContent() {
    const [content, setContent] = useState();
    function handleSelect(value) {
        setContent(value);
    }
    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                <TabButton
                    onSelect={() => handleSelect("components")}
                    onActive={content === "components"}>
                    Components
                </TabButton>
                <TabButton
                    onSelect={() => handleSelect("jsx")}
                    onActive={content === "jsx"}>
                    Jsx
                </TabButton>
                <TabButton
                    onSelect={() => handleSelect("props")}
                    onActive={content === "props"}>
                    Props
                </TabButton>
                <TabButton
                    onSelect={() => handleSelect("state")}
                    onActive={content === "state"}>
                    State
                </TabButton>
            </menu>
            {content ?
                (<div id='tab-content'>
                    <h3>{EXAMPLES[content].title}</h3>
                    <p>{EXAMPLES[content].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[content].code}
                        </code>
                    </pre>
                </div>) : (
                    <p>Please select a topic</p>
                )
            }
        </section>
    );
}