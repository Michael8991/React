import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./store/slices";
import { useState } from "react";

export const App = () => {
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const [value, setValue] = useState(2)

  const setNewValue = ({ target }) => {
    if (target.value === '') return setValue(0)
    const newValue = parseInt(target.value, 10)
    // if (target.value < 0) {
    //   setValue(0)
    //   return
    // }
    setValue(newValue)
    console.log(newValue.type)
  }


  return (
    <div className="bg-black text-white vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1>Counter {counter}</h1>
      <div className="row">
        <button className="btn btn-primary mt-2" onClick={() => dispatch(increment())}>Incrementar</button>
        <button className="btn btn-primary mt-2" onClick={() => dispatch(decrement())}>Decrementar</button>
        <button className="btn btn-primary mt-2" onClick={() => dispatch(incrementByAmount(value))}>Incrementar por {value}</button>
      </div>
      <div className="row">
        <input className="input-group-text mt-2" type="number" placeholder="Aumentar en X" onKeyUp={(e) => setNewValue(e)} />
      </div>
    </div>
  )
}
