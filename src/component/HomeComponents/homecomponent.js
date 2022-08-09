import React from 'react'
import { DATA_OF_PAGE } from "../../config/HomeConfig/HomeConfig";

const HomeComponents = (props) => {
  return (
    <>
      {DATA_OF_PAGE.map((props) => (
        <div>
          <h2>{props.dataHeading}</h2>
          <p>{props.dataDesc}</p>
        </div>
      ))}
      <div>
        <button onClick={() => (props.dispatch(props.decNumber(props.state)))}> <span> - </span> </button>
        <input type="text" value={props.state} />
        <button onClick={() => (props.dispatch(props.incNumber(props.state)))}>
          <span> + </span>
        </button>
        <br />
        <button onClick={()=> (props.dispatch(props.resetNumber()))}><span> reset </span></button>
      </div>
    </>
  )
}

export default HomeComponents