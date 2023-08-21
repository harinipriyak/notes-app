import {useEffect, useState} from "react";

const FunctionalComponent =({data}) => {
    const [counter, setCounter] = useState(0);
    const [counterContent, setCounterContent] = useState('Counter: ');

    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    const decreaseCounter = () => {
        setCounter(counter - 1);
    }

    useEffect(() => {
        if(counter>10) {
            setCounterContent('Wow, the counter is now greater than 10.');
        }
    });

    useEffect(() => {
        setTimeout(() => {
            setCounter(counter + 1);
        }, 2000);
    }, [counter]);

    return (
        <div className="functional-component">
            <header className="functional-component__header">
                <h2>This is a Functional Component</h2>
                Output is {data} {counter}
                <button onClick={increaseCounter}> Click to increase </button>
                <button onClick={decreaseCounter}> Click to decrease </button>
                <h1>{counter}</h1>
                <h1>{counterContent}</h1>
            </header>
        </div>
    );
}

export default FunctionalComponent;