import React, { useEffect, useState, useCallback } from "react";

export default function RemountTest() {
    const [key, setKey] = useState(1);
    const [console, setConsole] = useState([]);

    const onLifecycleChange = useCallback((message) => {
        setConsole((prevConsole) => [message, ...prevConsole]);
    }, []);
    return (
        <div className="App">
            <button
                onClick={() => {
                    setKey((oldKey) => oldKey + 1);
                }}
            >
                Remount
            </button>
            <ChildComp key={key} onLifecycleChange={onLifecycleChange} />

            <div className="console">
                {console.map((text, i) => (
                    <div key={i}>{text}</div>
                ))}
            </div>
        </div>
    );
}

const ChildComp = React.memo(({ onLifecycleChange }) => {
    useEffect(() => {
        onLifecycleChange("mounting ChildComp");
        return () => {
            onLifecycleChange("ummounting ChildComp");
        };
    }, [onLifecycleChange]);

    return <div style={{ marginTop: 10 }}>Child Comp</div>;
});
