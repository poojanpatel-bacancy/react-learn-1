import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisplayValue(b);
        setB("");
    }
    
    return (
        <>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'underline' }}>
                Hello world!
            </h1>
            <hr />
            <div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <input 
                        type="text" 
                        value={b} 
                        onChange={(e) => setB(e.target.value)} 
                        style={{ width: '200px', height: '50px', fontSize: '20px' }} 
                        placeholder="Enter your name" 
                    />
                    <button 
                        type="submit" 
                        style={{ 
                            backgroundColor: '#3b82f6', 
                            color: 'white', 
                            borderRadius: '0.375rem', 
                            padding: '0.5rem', 
                            marginTop: '1.5rem' 
                        }}
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
                <button onClick={() => setA(0)}>Reset</button>
            </div>
            <hr />
            <div className="card">
                <button onClick={() => { setCount(count + 1) }}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
