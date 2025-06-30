import React, { useRef, useState } from 'react';
import Test5_a from '../Test5_a';

const Test5 = () => {
    const [count, setCount] = useState(0);

    const [inputValue, setInputValue] = useState<number | ''>(0);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Allow empty string to clear input, otherwise convert to number
        setInputValue(value === '' ? '' : Number(value));
    };

    const handleChangeCount = () => {
        setCount(count + 1);
    }

    let x = useRef(2);

    const handleIncreamentX = () =>{
        console.log("x: ", x.current);
        x.current = x.current + 1;
        console.log("x incre : ", x.current);
    }

    return (
        <div>
            <h2>Memo and useRef</h2>
            <button onClick={handleChangeCount}>Increment</button>
            <p>Count: {count}</p>
            <br />
            <p> pesist value using useRef</p>
            <button onClick={handleIncreamentX}> Increment x {x.current}</button>

            <input
                type="number"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter a number"
                className="form-control"
                style={{ width: '200px' }}
            />
            <hr />
            {/* Render Test5_a only if inputValue is a valid number */}
            {typeof inputValue === 'number' && <Test5_a num={inputValue} />}
        </div>
    );
};

export default Test5;