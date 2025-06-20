import { useState } from "react";
import Welcome from "../Welcome";
import styles from './Test1.module.css';
import usePageTitle from "../../Hooks/usePageTitle";

function Button() {
    const [count, setCount] = useState(0)
    return (
        <button onClick={() => { setCount(count + 1) }}>
            count is {count}
        </button>
    )
}

function Test1() {
    usePageTitle('Test1 | My App');


    // const [count, setCount] = useState(0)

    const [a, setA] = useState(0);

    const handleIncrementA = () => {
        setA(a + 1);
    }
    const handleDecrementA = () => {
        if (a > 0) {
            setA(a - 1);
        } else {
            alert("Value cannot be negative");
        }
    }

    const [b, setB] = useState("");
    const [displayValue, setDisplayValue] = useState("");
    const [welcomeName, setWelcomeName] = useState("Amit");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisplayValue(b);
        setWelcomeName(b);
        setB("");
    }

    // ✅ Lifting State Up
    function TemperatureInput({ temp, onTempChange }: { temp: number, onTempChange: (value: number) => void }) {
        return (
            <input
                value={temp}
                onChange={(e) => onTempChange(Number(e.target.value))}
                placeholder="तापमान दर्ज करें"
            />
        );
    }
    function TemperatureOutput({ temp }: { temp: number }) {
        return temp >= 100 ? <p>Water is boiling</p> : <p>Water is not boiling</p>;
    }
    function Calculator() {
        const [temperature, setTemperature] = useState(0);

        return (
            <div>
                <TemperatureInput temp={temperature} onTempChange={(value) => setTemperature(value)} />
                <TemperatureOutput temp={temperature} />
            </div>
        );
    }

    return (
        <>
            <h1 className={styles.heading}>
                Hello world!
            </h1>
            <Welcome name={welcomeName} />
            <Welcome name="Sara" />
            <div>
                <p>Lifting State Up</p>
                <Calculator />
            </div>
            <hr />
            <div>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <input
                        type="text"
                        value={b}
                        onChange={(e) => setB(e.target.value)}
                        className={styles.inputBox}
                        placeholder="Enter your name"
                    />
                    <button
                        type="submit"
                        className={styles.submitBtn}
                    >
                        Submit
                    </button>
                </form>
                <p>You entering: {b}</p>
                <p>You entered: {displayValue}</p>
            </div>
            <hr />
            <div>
                <h2>the value of a is {a}</h2>
                <button onClick={handleIncrementA}>Increment</button>
                <button onClick={handleDecrementA}>Decrement</button>
                {a > 0 && (
                    <button onClick={() => setA(0)}>Reset</button>
                )}
            </div>
            <hr />
            <div className="card">
                <Button />
                <Button />
                <Button />
            </div>
        </>
    );
}

export default Test1; 