import React from "react";

const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        // do nothing
    }
    return num * 2;
};

function Test5_a({ num }: { num: number }) {
    console.log('Test5_a rendered.');
    return (
        <div>
            <h2>expensiveCalculation using react Memo component</h2>
            <p>Result: {expensiveCalculation(num)}</p>
        </div>
    )
}

export default React.memo(Test5_a);