import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { DATA } from "../../config/HomeConfig/homeconfig";
import {incNumber} from '../../redux/actions/INCREMENT/action.increment';
import {decNumber} from '../../redux/actions/DECREMENT/action.decrement';
import {resetNumber} from '../../redux/actions/RESET/action.reset';

const HomeComponents = () => {
  const currState = useSelector((state) => state.numberChange);
  const dispatch = useDispatch();
  return (
    <>
      {DATA.map((props) => (
        <div>
          <h2>{props.dataHeading}</h2>
          <p>{props.dataDesc}</p>
        </div>
      ))}
      <div>
        <button onClick={() => dispatch(decNumber(currState))}> <span> - </span> </button>
        <input type="text" value={currState} />
        <button onClick={() => dispatch(incNumber(currState))}>
          <span> + </span>
        </button>
        <br />
        <button onClick={()=> dispatch(resetNumber())}><span> reset </span></button>
      </div>
    </>
  )
}

export default HomeComponents