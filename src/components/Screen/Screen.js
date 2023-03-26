import React,{useEffect, useRef} from 'react'
import './Screen.css'


function Screen(props) {
  const resultRef=useRef()

  useEffect(()=>{
    resultRef.current.scrollIntoView()
  },[])

  return (
    <div className="header custom-scroll">
      <div className="header_history">
        <p>Calculator</p>
      </div>
      <br />
      <div className="header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>
      <p ref={resultRef} className="header_result">{props.result}</p>
    </div>
  )
}

export default Screen
