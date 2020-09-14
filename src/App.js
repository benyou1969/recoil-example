import React from "react";
import {
    RecoilRoot,
    atom,
    useRecoilState,
    useRecoilValue,
    selector,
} from "recoil";

const numState = atom({
    key: "numState", // unique
    default: 0,
});
const Counter = () => {
    const [number, setNumber] = useRecoilState(numState);
    return <button onClick={() => setNumber(number + 1)}>+1</button>;
};
const Display = () => {
    const number = useRecoilValue(numState);
    return <div>{number}</div>;
};
const squareState = selector({
    key: "squareState",
    get: ({ get }) => {
        return get(numState) ** 2;
    },
});

const Square = () => {
    const squareNumber = useRecoilValue(squareState);
    return <div>Square: {squareNumber}</div>;
};
function App() {
    return (
        <RecoilRoot>
            <Counter />
            <Display />
            <Square />
        </RecoilRoot>
    );
}

export default App;
