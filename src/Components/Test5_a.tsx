import React, { useMemo } from "react";

const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        // do nothing
    }
    return num * 2;
};


function Test5_a({ num, count2, handleChangeCount2 }: { num: number, count2: number, handleChangeCount2: () => void }) {
    console.log('Test5_a rendered.');

    const result = useMemo(() => {
        return expensiveCalculation(num);
    }, [num]);

    return (
        <div>
            <h2>expensiveCalculation using react Memo component</h2>
            <p>Result: {result}</p>
            <br />
            <button onClick={handleChangeCount2}>Increment count2: {count2}</button>
        </div>
    )
}

export default React.memo(Test5_a);