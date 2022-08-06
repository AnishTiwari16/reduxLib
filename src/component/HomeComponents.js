import React from 'react'
import {DATA} from '../config/HomeConfig/homeconfig'
function HomeComponents() {
  return (
    <div>
      {DATA.map((props)=>(
        <div>
        <h2>{props.headerTitle}</h2>
        <p>{props.headerDesc}</p>
        </div>
      ))}
    </div>
  )
}

export default HomeComponents