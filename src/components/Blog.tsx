import {  useAppDispatch, useAppSelector } from "../app/hooks"
import {  decrement, increment , incrementByAmt, selectCount } from "./blogSlice"

export const Blog = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> dispatch(increment())}> increment</button>
        <button onClick={()=> dispatch(decrement())}> decrement</button>
        <button onClick={()=> dispatch(incrementByAmt(10))}> increment by 10</button>
    </div>
  )
}
