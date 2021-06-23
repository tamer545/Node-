import React from "react";

export default function ReactChildrenTest() {
    return (
        <div className="App">
            <Wrapper>
                <h2 style={{ color: "red", margin: 0 }}>Red</h2>
                <h2 style={{ color: "blue" }}>Blue</h2>
                <h2 style={{ color: "green" }}>Green</h2>
            </Wrapper>
            <Wrapper>hello</Wrapper>
        </div>
    );
}

const Wrapper = ({ children }) => {
    const childrenArray = React.Children.toArray(children);
    console.log(childrenArray);
    return (
        <div style={{ border: "1px solid", padding: 20, margin: 5 }}>
            <div>{children}</div>
            <div>Number of children: {React.Children.count(children)}</div>
            <div>
                children type: <strong>{typeof children}</strong>
            </div>
        </div>
    );
};
