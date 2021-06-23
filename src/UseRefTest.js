import React, {useState, useRef} from "react";

class Dog {
    setName(name) {
        this.name = name;
    }

    bark() {
        alert("Woof! I'm " + this.name);
    }
}

export default function UseRefTest() {
    const dogRef = useRef(new Dog());
    const [, setCount] = useState(0);
    const simpleVariable = new Dog();

    return (
        <div className="App">
            <div>
                <h1 style={{background: "yellow"}}>🐶 No Ref:</h1>
                <button
                    onClick={() => {
                        simpleVariable.setName("Oliver");
                        setCount((prevCount) => prevCount + 1);
                    }}
                    style={{marginRight: 10}}
                >
                    First Click Here
                </button>
                then
                <button
                    style={{marginLeft: 10}}
                    onClick={() => simpleVariable.bark()}
                >
                    Bark
                </button>
            </div>

            <div>
                <h1 style={{background: "yellow"}}>🐶 Using Ref:</h1>
                <button
                    onClick={() => {
                        dogRef.current?.setName("Oliver");
                        setCount((prevCount) => prevCount + 1);
                    }}
                    style={{marginRight: 10}}
                >
                    First Click Here
                </button>
                then
                <button
                    style={{marginLeft: 10}}
                    onClick={() => dogRef.current?.bark()}
                >
                    Bark
                </button>
            </div>
        </div>
    );
}
