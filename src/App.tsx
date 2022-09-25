import './App.css';
import {useReducer} from "react";

interface InitialState {
    count: number
}


const initialState: InitialState = {
    count: 1
}

interface CountAction {
    type: 'INCREMENT' | 'DECREMENT'
}

function reducer(state: InitialState, action: CountAction): InitialState {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count - 1}
        default:
            return state
    }

}

function App() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="App" >
            <div style={{backgroundColor: 'peachpuff'}}>
                {state.count}
            </div>
            <button
                onClick={() => {
                    dispatch({ type: 'INCREMENT' , payload: 5 })
                }}
            >
                acrescer
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'DECREMENT' })
                }}
            >
                Diminuir
            </button>
        </div>
    );
}

export default App;
