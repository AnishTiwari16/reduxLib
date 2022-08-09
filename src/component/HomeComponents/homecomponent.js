import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { DATA_OF_PAGE } from "../../config/HomeConfig/HomeConfig";
import {incNumber} from '../../redux/actions/HomeActions.js/action.increment';
import {decNumber} from '../../redux/actions/HomeActions.js/action.decrement';
import {resetNumber} from '../../redux/actions/HomeActions.js/action.reset';

const HomeComponents = () => {
  const currState = useSelector((state) => state.numberChange);
  const dispatch = useDispatch();
  return (
    <>
      {DATA_OF_PAGE.map((props) => (
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