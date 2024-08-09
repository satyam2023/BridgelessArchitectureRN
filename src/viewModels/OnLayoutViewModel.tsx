import { View, Text } from 'react-native'
import React, { useState } from 'react'
import OnLayoutScreen from '../views/OnLayoutScreen';


const OnLayoutViewModel = () => {
    const [state1,setState1]=useState<boolean>(false);
    const [state2,setState2]=useState<boolean>(false);
    const [state3,setState3]=useState<boolean>(false);

    const updatestate1=()=>{
        console.log("First View")
        setState1(!state1)
    }

    const updatestate2=()=>{
        console.log("Second View")
        setState2(!state2)
    }

    const updatestate3=()=>{
        console.log("Third View")
        setState3(!state3)
    }

    console.log("UI Render")

  return (
    <OnLayoutScreen
    {...{
        updatestate1,
        updatestate2,
        updatestate3
    }}
    />
  )
}

export default OnLayoutViewModel