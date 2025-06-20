import { useReducer } from "react";
import usePageTitle from "../../Hooks/usePageTitle";
import TodoAppOneComponent from "../todo/TodoAppOneComponent";
import TodoAppOptimized from "../todo/TodoAppOptimized";

function Test3() {
    usePageTitle('Test3 | My App');

    function reducer(state: { count: number }, action: { type: string }) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
            default:
                return state;
        }
    }
    function CounterReducer() {
        const initialState = { count: 0 };
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <>
                <p>Count: {state.count}</p>
                <button onClick={() => dispatch({ type: 'increment' })}>➕</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>➖</button>
            </>
        );
    }

    return (
        <div>
            <p>Test3</p>
            <h3>Counter Reducer</h3>
            <CounterReducer />
            <hr />
            <TodoAppOneComponent />
            <hr />
            <TodoAppOptimized />
        </div>
    )
}

export default Test3;