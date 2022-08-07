import React from 'react'
import {DATA} from '../../config/HomeConfig/homeconfig'
function HomeContainer() {
  return (
    <div className = "container">
    {DATA.map((props)=>(
      <div className = "">
      <h2>{props.headerTitle}</h2>
      <p>{props.headerDesc}</p>
      </div>
    ))}
    <div className="">
      <h3>Result</h3>
    </div>
    </div>
  )
}

export default HomeContainer