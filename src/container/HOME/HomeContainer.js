import React from "react";
import { DATA } from "../../config/HomeConfig/homeconfig";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../../redux/actions/index.action";

function HomeContainer() {
  const currState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      {DATA.map((props) => (
        <div className="">
          <h2>{props.headerTitle}</h2>
          <p>{props.headerDesc}</p>
        </div>
      ))}
      <div className="">
        <button onClick={() => dispatch(decNumber())}>
          <span> - </span>
        </button>
        <input placeholder="Number" value={currState} />
        <button onClick={() => dispatch(incNumber())}>
          <span> + </span>
        </button>
      </div>
    </div>
  );
}

export default HomeContainer;
