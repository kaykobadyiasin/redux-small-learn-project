import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";


const CounterView = () => {

    const count = useSelector(state => state?.counter?.count);

    const dispatch = useDispatch()

    return (
        <div className="container mx-auto">
            <div className="mx-5">
                <h1 className="my-5 text-2xl text-center">Count: {count}</h1>
                <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap gap-5 justify-center">
                    <button onClick={() => { dispatch(decrement()) }} className="btn bg-blue-500 py-2 px-5 text-white rounded-md">Decrement</button>
                    <button onClick={() => { dispatch(reset()) }} className="btn bg-blue-800 py-2 px-5 text-white rounded-md">Reset</button>
                    <button onClick={() => { dispatch(increment()) }} className="btn bg-blue-500 py-2 px-5 text-white rounded-md">Increment</button>
                    <button onClick={() => { dispatch(incrementByAmount(5)) }} className="btn bg-blue-500 py-2 px-5 text-white rounded-md">Increment By 5</button>
                </div>
            </div>
        </div>
    );
};

export default CounterView;